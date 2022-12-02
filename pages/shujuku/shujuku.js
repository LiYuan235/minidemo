// pages/shujuku/shujuku.js
let name1=''
let price=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    inputValue:'测试数据双向绑定'
  },
  getName(e) 
  {
    name1=e.detail.value
    console.log('方法运行啦',e.detail.value)},
  getPrice(e) 
  {
    price=e.detail.value
    console.log('方法运行啦',e.detail.value)},
  addgoods() 
  {
    console.log('添加数据成功',name1)
    wx.showToast({
      icon:'none',
      title: '商品名为空',
    })
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //传统的固定写法
    /** 
    wx.cloud.database().collection('goods')
    .get(//查询操作
      {//请求成功
        success(res){
          console.log('请求成功',res)
        },
        //请求失败
        fail(err){
          console.log('请求失败',err)
        }
      }
      )*/
    //es6的简洁写法，建议用这种方法写，因为上一种方法的this指向当前函数，这里的this指向整个页面
    wx.cloud.database().collection('goods').get()
    .then(res=>{
      //请求成功
      console.log('第二种方法请求成功',res.data)
      this.setData({
        list:res.data
      })
    })
    .catch(err=>{
      //请求失败
      console.log('第二种方法请求失败',err)
    })
    //获取用户输入的数据
   
    // },
    // getPrice(e)
    // {
    //   console.log(e)
    // }


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