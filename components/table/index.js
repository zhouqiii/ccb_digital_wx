// index.js
Component({
  data: {
    listData: [
      { "name": "工具链1", "times": "40" },
      { "name": "工具链2", "times": "100" },
      { "name": "工具链3", "times": "13" },
      { "name": "工具链4", "times": "65" },
      { "name": "工具链55555", "times": "88" },
    ],
    onTitle: '',
    ifUpSort: true
  },
  properties: {
    titleChart: {
      type: String,
      value: '',
      observer: function(val){
        this.setData({
          onTitle: val
        })
      }
    }
  },
  onLoad: function () {
    console.log('onLoad')
  }
})