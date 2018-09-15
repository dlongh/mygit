Page({
  data: {
    text: "hello word",
    array: [{msg:1} , {msg:2}]
  },
  onLoad: function(){

  },
  onShareAppMessage: function(res){
    if(this.form === 'button'){
      console.log(res.target);
    }
    return {
      title: "好的文章",
      path: "/images/icon.png"
    }
  },
  onTapItemTap: function(demo){
    console.log(demo.index);
  },
  viewTap: function(){
    console.log("view tap");
  },
  onShow: function(){
    console.log(this.route);
  },
  setData: function() {
    this.setData({
      text: 'changed data'
    })
  },
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
})