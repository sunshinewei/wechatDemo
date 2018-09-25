//index.js
//获取应用实例
const app = getApp()

Page({

  onItemClick: function () {
    console.log("on pull down"),
    wx.navigateTo({
      url: 'requst/cdetail/cdetail',
    })
  },
  refresh:function(){
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          android: res.data.results
        })

        wx.stopPullDownRefresh()
      },
    })
    // wx.stopPullDownRefresh()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // wx.showLoading({
    //   title: '加载中',
    // })
    var that = this;
    const requestTask = wx.request({
      url: 'https://www.v2ex.com/api/topics/hot.json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          android: res.data
        })
        wx.hideLoading()
      },
    })
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
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var that = this
    wx.request({
      url: 'https://www.v2ex.com/api/topics/latest.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        that.setData({
          android: res.data
        })
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
      },
    })
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

  }
})