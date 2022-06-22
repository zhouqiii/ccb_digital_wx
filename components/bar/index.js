import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

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
  let itemStyle = {} //是否设置渐变色
  if(title === '流水线日均执行峰值(次)'){
    itemStyle = {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#83bff6' },
        { offset: 0.5, color: '#188df0' },
        { offset: 1, color: '#188df0' }
      ])
    }
  }
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
    itemStyle: {
      color: '#0098e1'
    },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    toolBox: {
      show: false,
      feature: {
        saveAsImage: {
          show: true,
          excludeComponents: ['toolbox'],
          pixelRatio: '1'
        }
      }
    },
    xAxis: [
      {
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
          interval: getInterval(time),
          rotate: 30,
          color: '#333333',
          fontSize: 12
        }
      }
    ],
    yAxis: [
      {
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
      }
    ],
    series: [
      {
        data: data,
        name: 'number',
        type: 'bar',
        barWidth: '35%',
        //设置平均值线
        markLine:{
          symbol:'none',//去掉箭头
          silent: true,//图形是否不响应和触发鼠标事件,false即响应和触发鼠标事件
          label: {
            position: 'insideStartTop',
            formatter: '{b}: {c}',
          },
          lineStyle: {
            color: 'yellow',
            width: 1,
            type: 'solid',
            cap: 'round'
          },
          data:[
            {
              type:"average",
              name:"平均值"
            }
          ]
        },
        label: {
          show: true,
          position: 'top',
          color: '#333333',
          fontSize: 12
        },
        itemStyle: itemStyle // 是否设置渐变色
      }
    ]
  };
  chart.on("click", (event) => {
    wx.navigateTo({
      url: `/pages/drill/index?time=${event.name}`,
      success: function(res) {
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
        console.log(val, 'val')
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
      let ecComponent = this.selectComponent('#mychart-dom-bar');
      ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        setOption(chart, data, time, title);
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    setTimeout(function () {
      // 获取 chart 实例的方式
    }, 1000);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
});

