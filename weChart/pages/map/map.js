

Page({
  data: {
    Height: 0,
    scale: 13,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [
      {
        id:1,
        iconPath: "../../images/add.png",
        position: {
          left: 320,
          top: 30,
          width: 30,
          height: 30
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: "../../images/little.png",
        position: {
          left: 320,
          top: 80,
          width: 30,
          height: 30
        },
        clickable: true
      }
    ],
    circles: []
  },
  onReady: function(){
    console.log(1);
  },
  onShow: function(){
    console.log(3);
  },
  onHide: function(){
    console.log(4);
  },
  onUnload: function(){
    console.log(5);
  },
  onTabItemTap: function(item){
    console.log(item.map);
    console.log(item.pagePath);
    console.log(item.text);
  },
  onLoad: function(){
    console.log(2);
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
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function(res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: 0,
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
            title: "我的当前位置"
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
      },
      markertap(e){
        console.log(e.markerId);
        wx.showActionSheet({
          itemList: ["A"],
          success: function (res) {
            console.log(res.tapIndex)
          },
          fail: function (res) {
            console.log(res.errMsg)
          }
        })
      },
      controltap(e) {
        var that = this;
        console.log("scale===" + this.data.scale)
        if (e.controlId === 0) {
          console.log(1);
          that.setData({
            scale: --this.data.scale
          })
        } else {
          console.log(2);
          that.setData({
            scale: ++this.data.scale
          })
        }
      },
    })
  }
})