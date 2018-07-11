//解析url的方法
function parseURL(url) {
    var result = [];
    var query = url.split("?")[1];
    if (!query) {
        return {};
    }
    var queryArr = query.split("&");
    var params = {};
    queryArr.forEach(function (item) {
        var key = item.split("=")[0];
        var value = item.split("=")[1];
        params[key] = value;
    });
    return params;
}



$(function () {
    //需求:获取传过来的值
    //var haha = parseURL("http://m.manmanbuy.com/coudan/CoudanList.aspx?money=1&area=1&site=1")
    // console.log(haha);
    //返回的是一个数组
    //传过来有值,那就取值,没有就是默认的1
    var shopId = parseURL(window.location.href).site ? parseURL(window.location.href).site : 0;
    var areaId = parseURL(window.location.href).area ? parseURL(window.location.href).area : 0;
    $.ajax({
        url:"http://mmb.ittun.com/api/getgsproduct",
        data:{shopid:shopId,areaid:areaId},
        type:"get",
        success:function(responce){
            console.log(responce);  
            var html =template("prolists",responce)  
           // console.log(html);
           $(".products").html(html);
            
        }
    })

    $.ajax({
        url: "http://mmb.ittun.com/api/getgsshop",
        type: "get",
        success: function (responce) {
            console.log(responce);
            $(".left .shop").html(responce.result[shopId].shopName)

            var shopClickAccount = 0
            $(".left .sort1").click(function () {

                $(this).siblings().children(".fa-sort-up").removeClass("fa-sort-up").addClass("fa-sort-down")
                var html = template("lists", responce)
                // console.log(html);

                if ($(this).children(".fa").hasClass("fa-sort-down")) {

                    $(".list").html(html).show();
                    $(this).children(".fa").removeClass("fa-sort-down").addClass("fa-sort-up")



                } else {
                    $(".list").html(html).hide();
                    $(this).children(".fa").removeClass("fa-sort-up").addClass("fa-sort-down")

                }
                $(".list li").each(function (i, e) {
                    //console.log($(e));
                    if ($(e).data("shopid") == shopId) {
                        $('<span class="fa fa-check"></span>').appendTo($(e))
                    }


                })

                //渲染是在点击事件之后
                $(".list li").click(function () {
                    //把值赋给上一级
                    $(".left .shop").html($(this).text());
                    shopId = $(this).data("shopid")
                    window.location.href = "gsproduct.html?area=" + areaId + "&site=" + shopId

                })


            })
        }
    })


    $.ajax({
        url: "http://mmb.ittun.com/api/getgsshoparea",
        type: "get",
        success: function (responce) {
            console.log(responce);
            var areaStr = responce.result[areaId].areaName;
            areaStr = areaStr.substr(0, 2);
            $(".left .area").html(areaStr);

            var areaClickAccount = 0
            $(".left .sort2").click(function () {
                //点击之后让其他的向下箭头变为向上箭头
                $(this).siblings().children(".fa-sort-up").removeClass("fa-sort-up").addClass("fa-sort-down")
                var html = template("arealists", responce)
                // console.log(html);

                if ($(this).children(".fa").hasClass("fa-sort-down")) {
                    $(".list").html(html).show();
                    $(this).children(".fa").removeClass("fa-sort-down").addClass("fa-sort-up")

                } else {
                    $(".list").html(html).hide();
                    $(this).children(".fa").removeClass("fa-sort-up").addClass("fa-sort-down")

                }
                $(".list li").each(function (i, e) {
                    //console.log($(e));
                    if ($(e).data("areaid") == areaId) {
                        $('<span class="fa fa-check"></span>').appendTo($(e))
                    }

                })
                //渲染是在点击事件之后
                $(".list li").click(function () {
                    //把值赋给上一级
                    $(".left .area").html($(this).text());
                    areaId = $(this).data("areaid")
                    window.location.href = "gsproduct.html?area=" + areaId + "&site=" + shopId
                })






            })


        }
    })










})