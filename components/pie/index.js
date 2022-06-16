import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

const app = getApp();

function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '阶段时长占比',
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#333333',
      },
      left: 'center'
    },
    backgroundColor: "#ffffff",
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'rgba(0, 0, 0)',
      borderWidth: '0',
      borderColor: 'none',
      textStyle: {
        color: '#ffffff',
        fontSize: 12
      },
      confine:true//将此限制打开后tooltip将不再溢出
    },
    legend: {
      orient: 'vertical',
      right: '20',
      bottom: '0',
      padding:[2, 5]
    },
    series: [{
      avoidLabelOverlap: true,
      label: {
        normal: {
          fontSize: 12,
          color: '#333333',
          position:'inner',
          formatter: '{b}\n{d}%'
        }
      },
      labelLine:{ // 当⽂案不在扇形⾥就会有这根线连接对应的⽂案和扇形，当⽂案在扇形内则隐藏起来
        normal:{
         show:true
        }
       },
      type: 'pie',
      center: ['50%', '50%'],
      radius: '50%',
      data: [{
        value: 55,
        name: '需求阶段'
      }, {
        value: 20,
        name: '设计阶段'
      }, {
        value: 10,
        name: '开发阶段'
      }, {
        value: 20,
        name: '测试阶段'
      }, {
        value: 38,
        name: '投产阶段'
      }]
    }]
  };

  chart.setOption(option);
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