// pages/login/login.js
import Toast from '@vant/weapp/toast/toast';
Page({
  no(){
    wx.reLaunch({
      url: '../index/index',
    })
  },
  //获取用户名
  getName(event){
    // console.log("获取输入的用户信息",event.detail.value)
    this.setData({
      name:event.detail.value
    })
  },
  //获取用户密码
  getPassword(event){
    // console.log("获取密码",event.detail.value)
    this.setData({
      password:event.detail.value
    })
  },
  //登录
  login(){
    // console.log("登录")
    let name=this.data.name
    let password=this.data.password
    // console.log("name",name)
    // console.log("mima",password)
    if(name.length<=0){
      wx.showToast({
        title: '请输入用户名！',
        icon:'none'
      })
      return
    }
    else if(password.length<=0){
      wx.showToast({
        title: '请输入密码！',
        icon:'none'
      })
      return
    }
    wx.cloud.database().collection('users').where({name:name}).get().then(res=>{
      if(res.data[0].password==this.data.password){
        Toast.loading({
          message: '加载中...',
          forbidClick: true,
        });
        wx.reLaunch({
          url: '../index/index?name='+res.data[0].name,
        })
      }else{
        wx.showToast({
          title: '账号或者密码不正确！',
          icon:'none'
        })
      }
    })
    .catch(err=>{
      console.log("登录失败",err)
      wx.showToast({
        title: '账号不存在！',
        icon:'none'
      })
    }) },
  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    password:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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