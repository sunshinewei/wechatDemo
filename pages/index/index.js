//index.js
//获取应用实例

Page({

  data:{

    source: [
      {
        barCode: "",
        categoryId: 35,
        characteristic: "补差价，勿拍",
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
        minPrice: 1,
        minScore: 0,
        name: "补差价",
        numberFav: 0,
        numberGoodReputation: 6,
        numberOrders: 107,
        numberSells: 0,
        originalPrice: 100,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 36,
        characteristic: "锁水润泽 薄作眼膜 厚做眼霜",
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
        minPrice: 900,
        minScore: 0,
        name: "兰蔻「小黑瓶」精华肌底眼部凝霜眼霜15ml 眼膜霜 淡化细纹黑眼圈",
        numberFav: 0,
        numberGoodReputation: 1,
        numberOrders: 95,
        numberSells: 0,
        originalPrice: 1800,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 35,
        characteristic: "批次更新实物为准",
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
        minPrice: 330,
        minScore: 0,
        name: "兰蔻 净透洁面泡沫洗面奶125ml 温和起泡保湿毛孔深层清洁 正品",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 91,
        numberSells: 0,
        originalPrice: 480,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 37,
        characteristic: "一扫干燥粗糙泛红肌肤",
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
        minPrice: 580,
        minScore: 0,
        name: "兰蔻 水份缘舒缓凝霜50ml 补水保湿滋润修护面霜日霜专柜正品",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 39,
        numberSells: 0,
        originalPrice: 980,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 42,
        characteristic: "长短刷毛 从根部开始 达到浓密效果",
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
        minPrice: 580,
        minScore: 0,
        name: "兰蔻 梦魅旋密睫毛膏01 6.5g 持久卷翘浓密防晕染温和易卸",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 17,
        numberSells: 0,
        originalPrice: 680,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 36,
        characteristic: "匀净肤色 净澈肌底 弹润饱满 淡化细纹",
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
        minPrice: 659,
        minScore: 0,
        name: "兰蔻 「小黑瓶」全规格精华肌底液 面部精华直达肌底补水保湿弹润",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 64,
        numberSells: 0,
        originalPrice: 1000,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 35,
        characteristic: "天猫专享色 粉嫩柔润",
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
        minPrice: 338,
        minScore: 0,
        name: "兰蔻 菁纯柔润唇膏 天猫专属色口红 317/379 西柚粉荧光粉",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 10,
        numberSells: 0,
        originalPrice: 998,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 35,
        characteristic: "兰蔻 卸妆水清滢速洁眼部卸妆水200ml 不含酒精温和眼唇卸",
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
        minPrice: 380,
        minScore: 0,
        name: "兰蔻 卸妆水清滢速洁眼部卸妆水200ml 不含酒精温和眼唇卸",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 6,
        numberSells: 0,
        originalPrice: 800,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
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
        weight: 0
      },
      {
        categoryId: 35,
        characteristic: "兰蔻 轻气垫CC霜修颜隔离乳 保湿清爽遮瑕防晒提亮肤色裸妆",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-06 10:41:42",
        dateStart: "2017-09-10 10:07:19",
        dateUpdate: "2018-10-04 18:45:16",
        gotScore: 0,
        gotScoreType: 0,
        id: 28,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 10,
        minPrice: 320,
        minScore: 0,
        name: "兰蔻 轻气垫CC霜修颜隔离乳 保湿清爽遮瑕防晒提亮肤色裸妆",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 12,
        numberSells: 0,
        originalPrice: 320,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        propertyIds: ",10,11,",
        recommendStatus: 1,
        recommendStatusStr: "推荐",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 320,
        userId: 51,
        views: 3440,
        weight: 0
      },
      {
        categoryId: 37,
        characteristic: "兰蔻根源洁颜啫喱* 温和透彻洗去各种污垢和残余彩妆，帮助清除肌肤表皮死细胞，让肌肤倍添健康光采，肌肤清新舒爽。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-06 10:39:52",
        dateUpdate: "2018-10-10 15:23:28",
        gotScore: 0,
        gotScoreType: 0,
        id: 27,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 10,
        minPrice: 340,
        minScore: 0,
        name: "兰蔻新根源补养洁颜啫喱",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 3,
        numberSells: 0,
        originalPrice: 340,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        propertyIds: ",10,11,",
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 340,
        userId: 51,
        views: 5010,
        weight: 0
      },
      {
        categoryId: 37,
        characteristic: "兰蔻全新立体塑颜系列，蕴含全新多层提拉科技，实现3D抗老提升，邀你共同见证全新卓效&ldquo;3D&rdquo;抗老提拉。 兰蔻塑颜紧致修护晚霜，提颜润肤 夜间重塑。 这款舒适的晚霜在肌肤理想的接受时间起作用，可作用于面部和颈部，实现提升、紧致和抗皱效果。",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-06 10:38:35",
        dateUpdate: "2018-10-10 15:25:51",
        gotScore: 0,
        gotScoreType: 0,
        id: 26,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 0,
        minPrice: 895,
        minScore: 0,
        name: "兰蔻立体塑颜紧致晚霜",
        numberFav: 0,
        numberGoodReputation: 0,
        numberOrders: 42,
        numberSells: 0,
        originalPrice: 895,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 895,
        userId: 51,
        views: 4310,
        weight: 0
      },
      {
        categoryId: 36,
        characteristic: "兰蔻首款「小黑瓶」精华肌底液 上市至今6年，「小黑瓶」开创了护肤新时代，以7项创新专利和生物科技获取的活性成份，深入肌底修护，激活年轻蛋白活性；以超小的精华分子，超快渗透修护肌底，使肌肤追溯到年轻状态，让肌肤柔软细腻摸得到，弹润透亮看的见，一日日，年轻光芒由内闪耀！",
        commission: 0,
        commissionType: 0,
        dateAdd: "2017-04-06 10:35:32",
        dateUpdate: "2018-10-10 10:03:16",
        gotScore: 0,
        gotScoreType: 0,
        id: 25,
        kanjia: false,
        kanjiaPrice: 0,
        logisticsId: 107,
        minPrice: 760,
        minScore: 0,
        name: "兰蔻小黑瓶精华肌底液",
        numberFav: 0,
        numberGoodReputation: 1,
        numberOrders: 43,
        numberSells: 0,
        originalPrice: 760,
        paixu: 0,
        pic: "/pages/index/img/111.jpg",
        pingtuan: false,
        pingtuanPrice: 0,
        recommendStatus: 0,
        recommendStatusStr: "普通",
        shopId: 0,
        status: 0,
        statusStr: "上架",
        stores: 99980,
        userId: 51,
        views: 4227,
        weight: 0
      }
    ]
  },
//开始
  tabClick: function (e) {
    this.setData({
      activeCategoryId: e.currentTarget.id
    });
    this.getGoodsList(this.data.activeCategoryId);
  },
  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  },
  tapBanner: function (e) {
    if (e.currentTarget.dataset.id != 0) {
      wx.navigateTo({
        url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
      })
    }
  },
  bindTypeTap: function (e) {
    this.setData({
      selectCurrent: e.index
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