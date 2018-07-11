$(function () {
    // 拿到id
    var titleid = urlTool(window.location.href).titleid;
    // console.log(titleid);
    // 显示和隐藏分类
    $(".searchbar").click(function (e) {
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
            console.log(backData);
            var categoryHtml = template("categoriesid", backData);
            $(".categories").html(categoryHtml);
            var title=backData.result[titleid].title;
            console.log(title);
            $(".title .titles").html(title)
        }
    });

    function render(id) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getbaicaijiaproduct',
            data: {
                titleid: id
            },
            type: 'get',
            success: function (backData) {
                console.log(backData);
                var popularhtml = template("popular", backData);
                $(".details ul").html(popularhtml)
            }
        })
    }

    render(titleid);

    // 点击高亮
  $(".tab li").click(function (e) { 
      e.preventDefault();
      $(this).addClass("active").siblings().removeClass("active");
      render(titleid);
      
  });
})