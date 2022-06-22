
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popStart: false,
    changeRateList: [
      { value: 18, date: '2022年1月'},
      { value: 25, date: '2022年2月'},
      { value: 10, date: '2022年3月'},
      { value: 32, date: '2022年4月'},
      { value: 15, date: '2022年5月'},
      { value: 38, date: '2022年6月'},
    ],
    valueRateList: [
      { value: 38, date: '2022年1月'},
      { value: 42, date: '2022年2月'},
      { value: 36, date: '2022年3月'},
      { value: 2, date: '2022年4月'},
      { value: 11, date: '2022年5月'},
      { value: 19, date: '2022年6月'},
    ],
    changeTimeList: [
      { value: 38, date: '2022年1月'},
      { value: 42, date: '2022年2月'},
      { value: 36, date: '2022年3月'},
      { value: 5, date: '2022年4月'},
      { value: 2, date: '2022年5月'},
      { value: 1, date: '2022年6月'},
    ],
    lineDurationList: [
      { value: 38, date: '2022年1月'},
      { value: 42, date: '2022年2月'},
      { value: 36, date: '2022年3月'},
      { value: 5, date: '2022年4月'},
      { value: 2, date: '2022年5月'},
      { value: 1, date: '2022年6月'},
    ],
    lineTimesList: [
      { value: 5, date: '2022年1月'},
      { value: 42, date: '2022年2月'},
      { value: 19, date: '2022年3月'},
    ],
    toolDurationList: [
      { value: 38, date: '2022年1月'},
      { value: 42, date: '2022年2月'},
      { value: 36, date: '2022年3月'},
      { value: 5, date: '2022年4月'},
      { value: 2, date: '2022年5月'},
      { value: 1, date: '2022年6月'},
    ],
    toolSuccessList: [
      { value: 18, date: '2022年1月'},
      { value: 25, date: '2022年2月'},
      { value: 10, date: '2022年3月'},
      { value: 32, date: '2022年4月'},
      { value: 15, date: '2022年5月'},
      { value: 38, date: '2022年6月'},
    ],
    payFuncList: [
      { value: 18, date: '2022年1月'},
      { value: 25, date: '2022年2月'},
      { value: 10, date: '2022年3月'},
      { value: 32, date: '2022年4月'},
      { value: 15, date: '2022年5月'},
      { value: 38, date: '2022年6月'},
    ],
    lineSuccessList: [
      { value: 5, date: '2022年1月'},
      { value: 42, date: '2022年2月'},
      { value: 19, date: '2022年3月'},
    ],
    indexRateList: [
      { value: 20, name: 'P00502000570' },
      { value: 58, name: 'P00502000571' },
      { value: 32, name: 'P00502000572' },
      { value: 11, name: 'P00502000573' },
      { value: 40, name: 'P00502000574' },
      { value: 86, name: 'P00502000575' },
    ],
    demandTimeList:  [
      { data: [18,20,32,46,12] ,date: '2022年1月' },
      { data: [25,30,11,32,4], date: '2022年2月' },
      { data: [12,10,15,28,48,2], date: '2022年3月' },
      { data: [15,32,11,12,14], date: '2022年4月' },
      { data: [38,42,27,31,19], date: '2022年5月' },
      { data: [38,42,27,31,19], date: '2022年6月' },
    ],
    stepTimeRate: [{
      value: 55,
      name: '需求阶段'
    }, {
      value: 20,
      name: '设计阶段'
    }, {
      value: 10,
      name: '开发阶段'
    }, {
      value: 20,
      name: '测试阶段'
    }, {
      value: 38,
      name: '投产阶段'
    }],
    popCurrentStart: new Date().getTime(),
    popCurrentEnd: new Date().getTime(),
    startDate: '',
    endDate: '',
    isLoaded: false,
    formatter(type, val) {
      if (type === 'year') {
        return `${val}年`;
      }
      if (type === 'month') {
        return `${val}月`;
      }
      if (type === 'day') {
        return `${val}日`;
      }
      return val;
    },
  },
  onPullDownRefresh: function(){
    this.setData({
      ifRefresh: true
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      startDate: this.formatDate(new Date()),
      endDate: this.formatDate(new Date())
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChange(event) {
    if(event.detail.name === 1) {
      this.setData({
        isLoaded: true,
      });
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }else if(event.detail.name === 0){
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  },
  formatDate(val) {
    // 格式化有效期时间为2021年02月的格式
    const month = (val.getMonth() + 1) < 10 ? `0${val.getMonth() + 1}` : val.getMonth() + 1;
    return `${val.getFullYear()}年${month}月`;
  },
  showStartPop() {
    this.setData({
      popStart: !this.popStart,
    });
  },
  showEndPop() {
    this.setData({
      popEnd: !this.popEnd,
    });
  },
  onCancelStartDate() {
    this.setData({
      popStart: false,
    });
  },
  onConfirmStartDate(val) {
    this.setData({
      popStart: false,
      startDate: `${this.formatDate(new Date(val.detail))}`,
    });
  },
  onCancelEndDate() {
    this.setData({
      popEnd: false,
    });
  },
  onConfirmEndDate(val) {
    this.setData({
      popEnd: false,
      endDate: `${this.formatDate(new Date(val.detail))}`,
    });
  }
})