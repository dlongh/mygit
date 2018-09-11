

Page({
  data: {

  },
  onLoad: function(){
    var _this = this;
    wx.getSystemInfo({
      success: function(res){
        _this.setData({
          view: {
            Height: res.windowHeight
          }
        })
      }
    })

    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: "map",
            latitude: res.latitude,
            longitude: res.longitude,
            width: 30,
            height: 30,
            iconPath: "../../images/map.png",
            position: {
              left: res.screenWidth - 50,
              top: 300 - 50,
              width: 30,
              height: 30
            },
            title: "我的当前位置  "
          }],
          circles: [{
            latitude: res.latitude,
            longitude: res.longitude,
            color: '#FF0000DD',
            fillColor: '#7cb5ec88',
            radius: 3000,
            strokeWidth: 1
          }]
        })
      },
      fail: function() {
        console.log("失败了");
      },
      regionchange(e) {
        console.log("regionchange===" + e.type)
      }
    })
  }
})