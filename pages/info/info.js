// pages/info/info.js
var name1=''
var number1=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:name1,
    number:number1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.cloud.callFunction({
      name:'getData'
    }).then(res=>{
      name1=res.result.data[0].name,
      number1=res.result.data[0].number
      this.setData({
        name:name1,
        number:number1
      })
    })
    .catch(err=>{
      console.log("云函数调用失败了",err)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})