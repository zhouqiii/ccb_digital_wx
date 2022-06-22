// index.js
Page({
  data: {
    listData: [// list属性给需求各阶段时长表格，num和request属性给需求变更率表格
      { "name": "工具链1", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "100"},
      { "name": "工具链2", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "72"},
      { "name": "工具链3", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "43"},
      { "name": "工具链4", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "11"},
      { "name": "工具链55555", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "2"},
      { "name": "工具链1", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "100"},
      { "name": "工具链2", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "72"},
      { "name": "工具链3", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "43"},
      { "name": "工具链4", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "11"},
      { "name": "工具链55555", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "2" },
      { "name": "工具链1", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "100" },
      { "name": "工具链2", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "72" },
      { "name": "工具链3", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "43" },
      { "name": "工具链4", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "11" },
      { "name": "工具链55555", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "2" },
      { "name": "工具链1", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "100" },
      { "name": "工具链2", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "72" },
      { "name": "工具链3", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "43" },
      { "name": "工具链4", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "11" },
      { "name": "工具链55555", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "2" },
      { "name": "工具链1", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "100" },
      { "name": "工具链2", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "72" },
      { "name": "工具链3", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "43" },
      { "name": "工具链4", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "11" },
      { "name": "工具链55555", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "2" },
      { "name": "工具链1", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "100" },
      { "name": "工具链2", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "72" },
      { "name": "工具链3", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "43" },
      { "name": "工具链4", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "11" },
      { "name": "工具链55555", num: '12', request: '4', list: [20, 30, 10, 2, 20], "times": "2" },
    ],
    title: '',
    cellText: ''
  },
  onLoad: function(option){
    console.log(option.time, 'time')//接收url传的参数，根据该参数请求获取表格数据
    const _that = this
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听 acceptShowData 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    eventChannel.on('acceptShowData', function(data) {
      _that.setData({
        title: `${option.time}各企业级项目${data.title}`,
        cellText: data.title
      })
    })
  }
})