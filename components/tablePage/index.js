// index.js
Component({
  data: {
    onHeader: [],
    onData: [],
    onTitle: '',
  },
  properties: {
    title: {
      type: String,
      value: '',
      observer: function(val){
        this.setData({
          onTitle: val
        })
      }
    },
    data: {
      type: Array,
      value: [],
      observer: function(val){
        this.setData({
          onData: val
        })
      }
    },
    header: {
      type: Array,
      value: [],
      observer: function(val){
        this.setData({
          onHeader: val
        })
      }
    }
  },
  methods: {
    
  },
  onLoad: function(option){
    console.log(option.query)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听 acceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
    })
  }
  
})