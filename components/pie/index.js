import * as echarts from '../../miniprogram_npm/ec-canvas/echarts';

const app = getApp();
function countNum(list) {
  const onCount = list.reduce((pre, cur) => {
    return pre += cur.value
  }, 0)
  return onCount
}
function getData(list) {
  const onCount = countNum(list)
  let data = list
  data.forEach((item) => {
    const percent = ((item.value/onCount)*100).toFixed(2)
    item.percent = percent
  })
  return data
}
function setOption(chart, data){
  var option = {
    backgroundColor: "rgb(228, 225, 225)",
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
    // legend: {
    //   orient: 'vertical',
    //   right: '20',
    //   bottom: '0',
    //   padding:[2, 5]
    // },
    grid: {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      // containLabel: true
      //grid区域是否包含坐标轴的刻度标签
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
      data: data
    }]
  };
  chart.setOption(option);
  return chart;
}
Component({
  data: {
    ec: {
      lazyLoad: true
    },
    tableData: [],
    tips: false
    ,
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
        this.setData({
          tableData: getData(val)
        })
        this.initPie(val)
      }
    }
  },
  methods: {
    initPie:function(data){
      let ecComponent = this.selectComponent('#mychart-dom-pie');
      ecComponent.init((canvas, width, height, dpr) => {
        const chart = echarts.init(canvas, null, {
          width: width,
          height: height,
          devicePixelRatio: dpr // new
        });
        setOption(chart, data);
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return chart;
      });
    },
    showTips() {
      this.setData({ tips: true })
    },
    onClose() {
      this.setData({ tips: false })
    }
  },
  onReady() {
  },
  onLoad(options) {
  },
  
});
