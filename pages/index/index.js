// pages/shujuku/shujuku.js
let name1=''
let psd=''
let number2=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //初始化隐藏模态输入框
    hiddenmodalput: true,
    number1:0,
    psd:''
  },
 

  // 增加奖牌
  addNumber(){
    this.setData({
      hiddenmodalput:false
    })
    const db=wx.cloud.database().command
    wx.cloud.database().collection('users').doc('4c3f29d46389fe5c00e6aafe6c2858c3').update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        number:db.inc(1)
      },
      success: function(res) {
        wx.showToast({
          title: '添加成功',
        })
      },
      fail: function(res){
        wx.showToast({
          title: '呜呜呜失败啦',
          icon:'none'
        })
      }
    })
    this.onLoad()
  },
  deleteNumber(){
    const db=wx.cloud.database().command
    wx.cloud.database().collection('users').doc('4c3f29d46389fe5c00e6aafe6c2858c3').update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        number:db.inc(-1)
      },
      success: function(res) {
        wx.showToast({
          title: '消耗成功',
        })
      },
      fail: function(res){
        wx.showToast({
          title: '呜呜呜失败啦',
          icon:'none'
        })
      }
    })
    this.onLoad()
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
    wx.cloud.database().collection('users').get()
    .then(res=>{ 
      //请求成功
      this.setData({
        number1:res.data[0].number
      })
      number2=res.data[0].number
      console.log('第二种方法请求成功',number2)
    })
    .catch(err=>{
      //请求失败
      console.log('第二种方法请求失败',err)
      wx.showToast({
        title: '请求失败啦┭┮﹏┭┮',
        icon:'none'
      })
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