import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

const app = getApp();
const lowData = [18, 25, 10, 32, 15, 38];
let onTitle = ''
function getInterval() {
  const len = lowData.length
  const k = len%6
  if(k !== 0) {
    return Math.ceil(len/6)
  }else{
    return (len/6 - 1)
  }
}
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // new
  });
  canvas.setChart(chart);

  var option = {
    title: {
      text: onTitle,
      textStyle: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#333333',
      },
      left: 'center'
    },
    // legend: {
    //   data: ['A', 'B', 'C'],
    //   top: 50,
    //   left: 'center',
    //   backgroundColor: 'red',
    //   z: 100
    // },
    grid: {
      left: 20,
      right: 20,
      bottom: 15,
      top: 40,
      containLabel: true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'rgba(0, 0, 0)',
      borderWidth: '0',
      textStyle: {
        color: '#ffffff'
      },
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#a6a6a6'
        }
      },
    },
    xAxis: {
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
      data: lowData,
      name: 'number',
      type: 'line',
      smooth: false,
    }]
  };

  chart.setOption(option);
  return chart;
}

Component({
  data: {
    ec: {
      onInit: initChart
    }
  },
  properties: {
    titleChart: {
      type: String,
      value: '',
      observer: function(val){
        onTitle = val
      }
    }
  },
  methods: {},
  onReady() {
  }
});

