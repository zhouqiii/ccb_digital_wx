import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

const app = getApp();
const gaugeData = [
  {
    value: 20,
    name: 'P00502000570',
    title: {
      show: false,
      offsetCenter: [],// ['-80%', '80%']
    },
    detail: {
      show: false,
      offsetCenter: [],// ['-40%', '95%']
    }
  },
  {
    value: 40,
    name: 'P00502000571',
    title: {
      show: false,
      offsetCenter: [],// ['0%', '80%']
    },
    detail: {
      show: false,
      offsetCenter: [],// ['0%', '95%']
    }
  },
  {
    value: 60,
    name: 'P00502000572',
    title: {
      show: false,
      offsetCenter: [],// ['40%', '80%']
    },
    detail: {
      show: false,
      offsetCenter: [],// ['40%', '95%']
    }
  }
];

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
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
        // icon: 'path://M2.9,0.7L2.9,0.7c1.4,0,2.6,1.2,2.6,2.6v115c0,1.4-1.2,2.6-2.6,2.6l0,0c-1.4,0-2.6-1.2-2.6-2.6V3.3C0.3,1.9,1.4,0.7,2.9,0.7z',
        // width: 10,
        // length: '80%',
        // offsetCenter: [0, '8%']
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
      data: gaugeData,
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
    gaugeData.forEach((item, index) => {
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
          data: gaugeData
        }
      ]
    });
  });
  chart.setOption(option, true);

  return chart;
}

Page({
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
      onInit: initChart
    }
  },

  onReady() {
  }
});
