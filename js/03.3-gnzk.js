$(function () {
    // 点击返回上一页
    $('.mui-icon-back').click(function () {
        // alert(1);
        window.history.go(-1);
    })
// 地址栏解析
    function parseURL(url) {
        var result = [];
        var query = url.split("?")[1];
        var queryArr = query.split("&");
        var params = {};
        queryArr.forEach(function (item) {
            var key = item.split("=")[0];
            var value = item.split("=")[1];
            params[key] = value;
        });
        return params;
    }

    var  params = parseURL(window.location.href);
    var productId =params.productId;

    console.log(params);
    // 发送ajax请求
    $.ajax({
    url:'http://mmb.ittun.com/api/getmoneyctrlproduct',
    data:{productid :productId},
    type:'GET',
    success:function (backData) {
    console.log(backData);
    var result=template('productinfo',backData)
    $('main').html(result);
    }
    })
})