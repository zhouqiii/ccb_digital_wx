import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

const app = getApp();
const gaugeData = [
  
];
function setOption(chart, data, title){
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
    series: [{
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 12,
        itemStyle: {
          color: '#FAC858'
        }
      },
      pointer: {
        icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        width: 5,
        length: '80%',
        offsetCenter: [0, '8%']
      },
      progress: {//最外层圆环样式设置
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        show: true,
        roundCap: true
      },
      data: data,
      title: {
        fontSize: 12
      },
      detail: {
        width: 30,
        lineHeight: 16,
        padding: [2,2],
        fontSize: 12,
        fontWeight: 'normal',
        color: '#333333',
        backgroundColor: 'auto',
        borderRadius: 3,
        formatter: '{value}%'
      },
    }]
  };
  chart.on("click", (event) => {
    data.forEach((item, index) => {
      if(index === event.dataIndex){
        item.title.show = true
        item.detail.show = true
        item.title.offsetCenter = ['0%', '85%']
        item.detail.offsetCenter = ['0%', '115%']
      }else{
        item.title.show = false
        item.detail.show = false
        item.title.offsetCenter = []
        item.detail.offsetCenter = []
      }
    })
    chart.setOption({
      series: [
        {
          data: data
        }
      ]
    });
  });
  chart.setOption(option);
  return chart;
}

Component({
  onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
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
        console.log(val, 'guageVal')
        let list = []
        val.forEach((item) => {
          list.push({
            value: item.value,
            name: item.name,
            title: {
              show: false,
              offsetCenter: [],// ['-80%', '80%']
            },
            detail: {
              show: false,
              offsetCenter: [],// ['40%', '95%']
            }
          })
        })
        this.initGuage(list, this.data.titleChart)
      }
    }
  },
  methods: {
    initGuage:function(data, title){
      let ecComponent = this.selectComponent('#mychart-dom-gauge');
      ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        setOption(chart, data, title);
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
  },
  onReady() {
  }
});
