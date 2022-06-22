// index.js
Component({
  data: {
    onHeader: [],
    onData: [],
    onTitle: '',
    ifSteps: false,
    stepList: ['需求','设计', '开发', '评审', '投产'],
  },
  properties: {
    title: {
      type: String,
      value: '',
      observer: function(val){
        let title = val
        title = title.replace("(%)", "")
        title = title.replace("(秒)", "")
        title = title.replace("(次)", "")
        title = title.replace("(日)", "")
        this.setData({
          onTitle: title,
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
    cellText: {
      type: String,
      value: '',
      observer: function(val){
        let headerTitle = []
        if(val === '需求变更率'){
          headerTitle = ['序号', '企业级项目名称', '变更需求数', '计划投产需求数', val]
        }else{
          headerTitle = ['序号', '企业级项目名称', val]
        }
        this.setData({
          onHeader: headerTitle,
          ifSteps: val === '需求各阶段时长(日)'
        })
      }
    }
  },
  methods: {
    
  },
  onLoad: function(option){
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    eventChannel.emit('someEvent', {data: 'test'});
    // 监听 acceptDataFromOpenerPage 事件，获取上一页面通过 eventChannel 传送到当前页面的数据
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data)
    })
  }
  
})