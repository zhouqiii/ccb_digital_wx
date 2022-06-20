import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

let chart = null;
const payData = [18, 25, 10, 32, 15, 38];
function getInterval() {
  const len = payData.length
  const k = len%6
  if(k !== 0) {
    return Math.ceil(len/6)
  }else{
    return (len/6 - 1)
  }
}

function initChart(canvas, width, height, dpr) {
  chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: '业务功能交付效率',
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
    // tooltip: {
    //   trigger: 'axis',
    //   backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //   color: 'rgba(0, 0, 0)',
    //   borderWidth: '0',
    //   textStyle: {
    //     color: '#ffffff'
    //   },
    //   axisPointer: {            // 坐标轴指示器，坐标轴触发有效
    //     type: 'line',        // 默认为直线，可选为：'line' | 'shadow'
    //     lineStyle: {
    //       color: '#a6a6a6'
    //     }
    //   },
    //   // formatter(params) {
    //   //   return `<div>${params[0].name}: ${params[0].value}</div>`
    //   // }
    // },
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
        data: ['2022年1月', '2022年2月', '2022年3月', '2022年4月', '2022年5月', '2022年6月'],
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#a6a6a6'
          }
        },
        axisLabel: {
          interval: getInterval(),
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
        data: payData,
        name: 'number',
        type: 'bar',
        barWidth: '35%',
        label: {
          show: true,
          position: 'top',
          color: '#333333',
          fontSize: 12
        },
        // itemStyle: { // 是否设置渐变色
        //   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        //     { offset: 0, color: '#83bff6' },
        //     { offset: 0.5, color: '#188df0' },
        //     { offset: 1, color: '#188df0' }
        //   ])
        // },
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

Page({
  data: {
    ec: {
      onInit: initChart
    }
  },
  onReady() {
    setTimeout(function () {
      // 获取 chart 实例的方式
      // console.log(chart)
    }, 2000);
  }
});

