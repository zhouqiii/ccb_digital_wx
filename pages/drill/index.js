// index.js
Page({
  data: {
    listHeader: ['11', '22'],
    listData: [
      { "name": "工具链1", "times": "100" },
      { "name": "工具链2", "times": "72" },
      { "name": "工具链3", "times": "43" },
      { "name": "工具链4", "times": "11" },
      { "name": "工具链55555", "times": "2" },
      { "name": "工具链1", "times": "100" },
      { "name": "工具链2", "times": "72" },
      { "name": "工具链3", "times": "43" },
      { "name": "工具链4", "times": "11" },
      { "name": "工具链55555", "times": "2" },
      { "name": "工具链1", "times": "100" },
      { "name": "工具链2", "times": "72" },
      { "name": "工具链3", "times": "43" },
      { "name": "工具链4", "times": "11" },
      { "name": "工具链55555", "times": "2" },
      { "name": "工具链1", "times": "100" },
      { "name": "工具链2", "times": "72" },
      { "name": "工具链3", "times": "43" },
      { "name": "工具链4", "times": "11" },
      { "name": "工具链55555", "times": "2" },
      { "name": "工具链1", "times": "100" },
      { "name": "工具链2", "times": "72" },
      { "name": "工具链3", "times": "43" },
      { "name": "工具链4", "times": "11" },
      { "name": "工具链55555", "times": "2" },
      { "name": "工具链1", "times": "100" },
      { "name": "工具链2", "times": "72" },
      { "name": "工具链3", "times": "43" },
      { "name": "工具链4", "times": "11" },
      { "name": "工具链55555", "times": "2" },
    ],
    title: '标题',
  },
  onLoad: function(option){
    console.log(option.time, 'time')//接收url传的参数，根据该参数请求获取表格数据
    const _that = this
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听 acceptShowData 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    eventChannel.on('acceptShowData', function(data) {
      _that.setData({
        title: data.title
      })
    })
  }
})