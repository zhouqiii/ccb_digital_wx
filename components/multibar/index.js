import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

const step = new Map()
  .set(0, '需求')
  .set(1, '评审')
  .set(2, '开发')
  .set(3, '测试')
  .set(4, '投产')

function getInterval(data) {
  const len = data[0].length
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
    legend: {
      orient: 'horizontal',
      left: 'center',
      bottom: '0',
      itemWidth: 10,
      itemHeight: 10,
      itemStyle: {
        borderWidth: 0
      }
    },
    itemStyle: {
      color: '#0098e1'
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'rgba(0, 0, 0)',
      borderWidth: '0',
      renderMode: 'richText',
      textStyle: {
        color: '#ffffff',
        fontSize: 12
      },
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'line',        // 默认为直线，可选为：'line' | 'shadow'
        lineStyle: {
          color: '#a6a6a6'
        }
      },
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
          interval: getInterval(data),
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
    series: data
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
        let obj1 = []
        let list = []
        let dateList = val.map((item) => item.date)
        val.forEach((item) => {
          item.data.forEach((ele, index) => {
            if(obj1[index]) {
             obj1[index].push(ele)
            } else {
              obj1[index] = [ele]
             }
           })
        })
        obj1.forEach((item, index) => {
          list.push({
            data: item,
            name: step.get(index),
            type: 'bar',
            barWidth: '12%'
          })
        })
        this.initMultiBar(list, dateList, this.data.titleChart)
      }
    }
  },
  methods: {
    initMultiBar:function(data, time, title){
      let ecComponent = this.selectComponent('#mychart-dom-multibar');
      ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        setOption(chart, data, time, title);
        return chart;
      });
    },
  },
  onReady() {}
});

