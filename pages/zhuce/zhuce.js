// pages/zhuce/zhuce.js
// 用户注册页面
Page({
  //获取用户名
  getName(event){
    console.log("获取输入的用户信息",event.detail.value)
    this.setData({
      name:event.detail.value
    })
  },
  //获取用户密码
  getPassword(event){
    console.log("获取密码",event.detail.value)
    this.setData({
      password:event.detail.value
    })
  },
   //注册
   zhuce(){
    console.log("注册")
    let name=this.data.name
    let password=this.data.password
    // console.log("name",name)
    // console.log("mima",password)
    if(name.length>10||name.length<=0){
      wx.showToast({
        title: '用户名字至多两位且不能为空！',
        icon:'none'
      })
      return
    }
    else if(password.length<=0){
      wx.showToast({
        title: '密码不能为空！',
        icon:'none'
      })
      return
    }
    wx.cloud.database().collection('users').add({
      data:{
        name:name,
        password:password,
        number:0
      }
    }).then(res=>{
      // console.log("注册成功",res)
    })
    .catch(err=>{
      // console.log("注册失败",err)
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