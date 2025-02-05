// Mini Program/pages/list/list.js
let datas=require('../../../datas/list-data.js')
console.log(datas,typeof datas);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      listArr:datas.list_data
    })
  },
  //点击跳转到详情页
  toDetail(event){
    console.log(event);
    let index=event.currentTarget.dataset.index;
    wx.navigateTo({
    url: '/Mini Program/pages/detail/detail?index='+index,
  })
  },
  //点击轮播图的时候跳转
  carouseToDetail(event){
    console.log(event);
    let index=event.target.dataset.index;
    wx.navigateTo({
    url: '/Mini Program/pages/detail/detail?index='+index,
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
  console.log("页面隐藏");

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载");

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