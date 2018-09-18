Page({
  data: {
    text: "hello word",
    subtext: "hello dulonghui",
    num: 0,
    array: [{ text: "init data" }],
    // array: [{msg:1} , {msg:2}]

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
  changeText: function () {
    // this.data.text = 'changed data'  // bad, it can not work
    this.setData({
      text: 'changed data'
    })
  },
  setNum: function(){
    this.data.num = 1
    this.setData({
      num: this.data.num
    })
  },
  getArray: function(){
    this.setData({
      'array[0].text': 'change data'
    })
  },
  addNewField: function(){
    this.setData({
      'newField.text' : 'new data'
    })
  }
})