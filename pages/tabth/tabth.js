// pages/tabth/tabth.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // wx.showLoading({
    //   title: '加载中',
    // })
    /**
     *
     * banner
     */
    wx.request({
      url: 'http://www.wanandroid.com/banner/json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          banners: res.data.data
        })
        wx.hideLoading()
      },
    })

    /**
     * 列表页
     */
    wx.request({
      url: 'http://www.wanandroid.com/article/list/0/json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          lists: res.data.data
        })
        wx.hideLoading()
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    /**
     * 列表页
     */
    var that = this;
    wx.showLoading({
      title: '加载中',
    })

    wx.request({
      url: 'http://www.wanandroid.com/article/list/1/json',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        that.setData({
          lists: res.data.data
        })
        wx.hideLoading()
      }
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})