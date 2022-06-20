// index.js
Component({
  data: {
    listData: [
      { "name": "工具链1", "times": "100" },
      { "name": "工具链2", "times": "72" },
      { "name": "工具链3", "times": "43" },
      { "name": "工具链4", "times": "11" },
      { "name": "工具链55555", "times": "2" },
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
  methods: {
    changeSort(){
      this.setData({
        ifUpSort: !this.data.ifUpSort,
        listData: this.data.listData.reverse()
      })
    }
  },
  onLoad: function () {
    console.log('onLoad')
  },
  
})