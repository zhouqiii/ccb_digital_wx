import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

const app = getApp();
function getInterval(data) {
  const len = data.length
  const k = len%6
  if(k !== 0) {
    return Math.ceil(len/6)
  }else{
    return (len/6 - 1)
  }
}
function setOption(chart, data, time, title){
  var option = {
    title: {
      text: title,
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#333333',
      },
      left: 'center'
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: time,
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#a6a6a6'
        }
      },
      axisLabel: {
        interval: getInterval(data),
        rotate: 30,
        color: '#333333',
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#a6a6a6'
        }
      },
      axisLabel: {
        color: '#333333',
        fontSize: 12
      }
    },
    series: [{
      data: data,
      name: 'number',
      type: 'line',
      smooth: false,
      label: {
        show: true,
        position: 'top',
        color: '#333333',
        fontSize: 12
      },
    }]
  };
  chart.on("click", (event) => {
    wx.navigateTo({
      url: `/pages/drill/index?time=${event.name}`,
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        someEvent: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过 eventChannel 向被打开页面传送数据
        res.eventChannel.emit('acceptShowData', { title })
      }
    })
  });
  chart.setOption(option);
  return chart;
}

Component({
  data: {
    ec: {
      lazyLoad: true
    }
  },
  properties: {
    titleChart: {
      type: String,
      value: '',
      observer: function(val){
      }
    },
    dataChart: {
      type: Array,
      value: [],
      observer: function(val){
        let valueList = []
        let dateList = []
        val.forEach((item) => {
          valueList.push(item.value)
          dateList.push(item.date)
        })
        this.initLine(valueList, dateList, this.data.titleChart)
      }
    }
  },
  methods: {
    initLine:function(data, time, title){
      let ecComponent = this.selectComponent('#mychart-dom-line');
      ecComponent.init((canvas, width, height, dpr) => {
        // 获取组件的 canvas、width、height 后的回调函数
        // 在这里初始化图表
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        //调用设定EChart报表状态的函数，并且把从后端拿到的数据传过去
        setOption(chart, data, time, title);
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
  },
  onReady() {
  },

});

