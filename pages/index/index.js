//index.js
//获取应用实例

Page({

  data:{

    source: [
      {
        barCode: "",
        categoryId: 35,
        characteristic: "茅台醇为茅台集团技开公司开发，协议价务必保密，零售价应按市场零售价执行。",
        commission: 9,
        commissionType: 1,
        dateAdd: "2017-05-03 09:09:36",
        dateStart: "2017-10-20 08:34:37",
        dateUpdate: "2018-10-10 17:03:55",
        gotScore: 0,
        gotScoreType: 0,
        id: 36,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 12,
        originalPrice: 599,
        minScore: 0,
        name: "茅台醇1992 规格（53°）（500ml/瓶）",
        numberFav: 0,
        numberGoodReputation: 6,
        numberOrders: 107,
        numberSells: 0,
        minPrice: 369,
        paixu: 0,
        pic: "/pages/index/img/92mt.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        propertyIds: ",11,",
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 9999,
        userId: 51,
        views: 14958,
        weight: 0,
        scanShow: false,
        scanPrice:0
      },
      {
        categoryId: 36,
        characteristic: "茅台醇为茅台集团技开公司开发，协议价务必保密，零售价应按市场零售价执行。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-26 23:07:15",
        dateUpdate: "2018-10-10 17:18:59",
        gotScore: 0,
        gotScoreType: 0,
        id: 35,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 0,
        minPrice: 209,
        minScore: 0,
        name: "茅台醇1998规格（53°）（500ml/瓶）",
        numberFav: 0,
        numberGoodReputation: 1,
        numberOrders: 95,
        numberSells: 0,
        originalPrice: 369,
        paixu: 0,
        pic: "/pages/index/img/98mt.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 1000074,
        userId: 51,
        views: 21364,
        weight: 0,
        scanShow: false,
        scanPrice: 0
      },
      {
        categoryId: 35,
        characteristic: "茅台醇为茅台集团技开公司开发，协议价务必保密，零售价应按市场零售价执行。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-26 22:39:51",
        dateUpdate: "2018-10-10 11:13:28",
        gotScore: 0,
        gotScoreType: 0,
        id: 34,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 0,
        minPrice: 109,
        minScore: 0,
        name: "茅台醇2008规格（53°）（500ml/瓶）",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 91,
        numberSells: 0,
        originalPrice: 199,
        paixu: 0,
        pic: "/pages/index/img/08mt.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 1000068,
        userId: 51,
        views: 8723,
        weight: 0,
        scanShow: false,
        scanPrice: 0
      },
      {
        categoryId: 37,
        characteristic: "白金金质酒为茅台集团白金酒公司开发，价格务必保密，市场零售价在最低零售价到扫码价之间。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-26 22:29:45",
        dateUpdate: "2018-10-10 17:10:30",
        gotScore: 0,
        gotScoreType: 0,
        id: 33,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 10,
        minPrice: 288,
        minScore: 0,
        name: "白金金质酒V30（蓝）规格（53°）（500ml/瓶）",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 39,
        numberSells: 0,
        originalPrice: 498,
        paixu: 0,
        pic: "/pages/index/img/bjjzl.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 77,
        userId: 51,
        views: 8989,
        weight: 0,
        scanShow: true,
        scanPrice: 1288
      },
      {
        categoryId: 42,
        characteristic: "白金金质酒为茅台集团白金酒公司开发，价格务必保密，市场零售价在最低零售价到扫码价之间。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-26 21:52:16",
        dateUpdate: "2018-10-06 21:25:42",
        gotScore: 0,
        gotScoreType: 0,
        id: 32,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 10,
        minPrice: 258,
        minScore: 0,
        name: "白金金质酒V30（黑）规格（53°）（500ml/瓶）",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 17,
        numberSells: 0,
        originalPrice: 398,
        paixu: 0,
        pic: "/pages/index/img/bjjzh.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 88,
        userId: 51,
        views: 3821,
        weight: 0,
        scanShow: true,
        scanPrice: 1188
      },
      {
        categoryId: 36,
        characteristic: "白金金质酒为茅台集团白金酒公司开发，价格务必保密，市场零售价在最低零售价到扫码价之间。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-25 23:54:54",
        dateUpdate: "2018-10-10 17:15:06",
        gotScore: 0,
        gotScoreType: 0,
        id: 31,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 0,
        minPrice: 258,
        minScore: 0,
        name: "白金金质酒V30（金）规格（53°）（500ml/瓶）",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 64,
        numberSells: 0,
        originalPrice: 398,
        paixu: 0,
        pic: "/pages/index/img/bjjzj.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 19079,
        userId: 51,
        views: 12844,
        weight: 0,
        scanShow: true,
        scanPrice: 1188
      },
      {
        categoryId: 35,
        characteristic: "白金金质酒为茅台集团白金酒公司开发，价格务必保密，市场零售价在最低零售价到扫码价之间。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-25 23:37:32",
        dateUpdate: "2018-10-10 17:04:45",
        gotScore: 0,
        gotScoreType: 0,
        id: 30,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 10,
        minPrice: 228,
        minScore: 0,
        name: "白金金质酱香规格（53°）（500ml/瓶）",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 10,
        numberSells: 0,
        originalPrice: 298,
        paixu: 0,
        pic: "/pages/index/img/bjjx.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        propertyIds: ",10,",
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 338,
        userId: 51,
        views: 3272,
        weight: 0,
        scanShow: true,
        scanPrice: 888
      },
      {
        categoryId: 35,
        characteristic: "白金金质酒为茅台集团白金酒公司开发，价格务必保密，市场零售价在最低零售价到扫码价之间。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-25 23:18:58",
        dateUpdate: "2018-10-09 14:14:22",
        gotScore: 0,
        gotScoreType: 0,
        id: 29,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 10,
        minPrice: 350,
        minScore: 0,
        name: "国典酱香(习酒内部定制酒)",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 6,
        numberSells: 0,
        originalPrice: 598,
        paixu: 0,
        pic: "/pages/index/img/xj.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 98,
        userId: 51,
        views: 2868,
        weight: 0,
        scanShow: false,
        scanPrice: 0
      } 
    ]
  },

//条目点击事件
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "requst/cdetail/cdetail?source=" + JSON.stringify(e.currentTarget.dataset.item)
    })
  },
  scroll: function (e) {
    //  console.log(e) ;
    var that = this, scrollTop = that.data.scrollTop;
    that.setData({
      scrollTop: e.detail.scrollTop
    })
    // console.log('e.detail.scrollTop:'+e.detail.scrollTop) ;
    // console.log('scrollTop:'+scrollTop)
  },
  refresh:function(){
  
    // wx.stopPullDownRefresh()
  },

//结束




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

  }
})