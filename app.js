// app.js
App({
  onLaunch (options) {
    // Do something initial when launch.
    wx.cloud.init({
      env: 'cloud1-9gaigf68e499792c'
    })
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})