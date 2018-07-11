$(function () {
    // 显示和隐藏分类
    $(".icon").click(function (e) {
        e.preventDefault();
        $(".category").toggleClass("active");
    });
    $(".category .upmenu").click(function () {
        $(".category").toggleClass("active");

    });

    // 分类渲染
    $.ajax({
        url: 'http://mmb.ittun.com/api/getbaicaijiatitle',
        type: 'get',
        success: function (backData) {
            //  console.log(backData);
            var categoryHtml = template("categoriesid", backData);
            $(".categories").html(categoryHtml);
        }
    });
    // 热销渲染
    $.ajax({
      url: 'http://mmb.ittun.com/api/getbaicaijiaproduct',
      data: {
        titleid :2
      },
      type: 'get',
      success: function (backData) {
         console.log(backData);
        var popularhtml=template("popular",backData);
        // $(".swiper-container1 .swiper-wrapper").html(popularhtml)
      }
    })


})