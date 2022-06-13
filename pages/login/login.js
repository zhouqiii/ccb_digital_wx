// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isPassWord: false,
    user_val: '',
    pwd_val: '',
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
  eyeTap() {
    this.setData({
      isPassWord: !this.data.isPassWord
    })
  },
  // 密码框失去焦点时
  bindblur: function (e) {
    this.setData({
      pwd_val: e.detail.value
    })
  },
  userbindblur: function (e) {
    this.setData({
      user_val: e.detail.value
    })
  },
  login() {
    if (this.data.user_val == 'idt' && this.data.pwd_val == 'Idt@2022') {
      wx.showToast({
        title: '登陆成功',
        icon: 'success',
        duration: 1500,
      })
      wx.reLaunch({
        url: '/pages/index/index'
      })
    } else {
      wx.showToast({
        title: '账号或密码错误',
        icon: 'error',
        duration: 1500,
      })
    }
  }
})