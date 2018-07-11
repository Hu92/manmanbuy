$(function () {
    // 点击返回上一页
    $('.mui-icon-back').click(function () {
        // alert(1);
        window.history.go(-1);
    })
    // 点击返回顶部
    // $('.toTop').click(function () {
  
    // })







    // 发送ajax请求
    $.ajax({
    url:'http://mmb.ittun.com/api/getsitenav',
    data:{},
    type:'GET',
    success:function (backData) {
    // console.log(backData);
    var result=template('friendslink',backData)
    $('.friends').html(result);
    }
    })
})