import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

let chart = null;
const payData = [18, 25, 10, 32, 15, 38];
const demandData = [[20,30,11,32,4,42],[32,15,28,48,2,21],[46,32,11,12,14,49],[12,42,27,31,19,4]]
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
      text: '需求各阶段·时长',
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
      bottom: '0'
    },
    itemStyle: {
      color: '#0098e1'
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'rgba(0, 0, 0)',
      borderWidth: '0',
      textStyle: {
        color: '#ffffff'
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
        name: 'A',
        type: 'bar',
        barWidth: '12%'
      },
      {
        data: demandData[0],
        name: 'B',
        type: 'bar',
        barWidth: '12%'
      },{
        data: demandData[1],
        name: 'C',
        type: 'bar',
        barWidth: '12%'
      },{
        data: demandData[2],
        name: 'D',
        type: 'bar',
        barWidth: '12%'
      },{
        data: demandData[3],
        name: 'E',
        type: 'bar',
        barWidth: '12%'
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
  onReady() {}
});

