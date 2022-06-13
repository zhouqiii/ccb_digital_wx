
Page({

  /**
   * 页面的初始数据
   */
  data: {
    popStart: false,
    popCurrentStart: new Date().getTime(),
    popCurrentEnd: new Date().getTime(),
    startDate: '',
    endDate: '',
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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