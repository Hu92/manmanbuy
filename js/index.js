$(function(){
    // $("#more").click(function(e){
    //     if($(".ullist2").css("display")=="none") {
    //         $(".ullist2").show();
    //     }else {
    //         $(".ullist2").hide();
    //     }
    // })

    // 首页分类的渲染
    $.ajax ({
        url:"http://mmb.ittun.com/api/getindexmenu",
        success:function (response) {
            // console.log(response);
            var html = template("list",response);
            $(".ullist").html(html);

            $(".ullist li:lt(8)").each(function(index,dom){
                $(dom).show();
            })

        }
    })

    // 点击更多现实,再次点击隐藏 
    $(".ullist").on("click","li:nth-child(8)",function (e) {
        e.preventDefault();
        // alert("A");
        $(".ullist li:gt(7)").toggle();
    })

    // 下面商品的渲染
    $.ajax({
        url:"http://mmb.ittun.com/api/getmoneyctrl",
        type:"get",
        success:function (back) {
            console.log(back);
            var html = template("userinfo",back);
            $(".vray").html(html);
        }
    });

    $(".more input").click(function(){
      window.location.href="./inlanddiscount.html"
    })
})