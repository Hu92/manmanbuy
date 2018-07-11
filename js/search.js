$(function () {
    $.ajax({
        url: "http://mmb.ittun.com/api/getcategorytitle",
        data: {},
        type: "GET",
        success: function (backdata) {
            var drophtml = template("dropdownmenu", backdata);
            $('.list').html(drophtml);
            $('.list').on('click', '.dropdown-toggle', function () {
                var id = $(this).data("id");
                console.log(id);
                render(id);
               

                var list = '.ul1' + id;
                

                if ($(this).children('span').hasClass("mui-icon-arrowdown")) {
                   
                    $(this).children('span').addClass("mui-icon-arrowup").removeClass("mui-icon-arrowdown");
                } else {
                    $(this).children("span").addClass("mui-icon-arrowdown").removeClass("mui-icon-arrowup")

                   
                }
                $(list).toggleClass("active")
                $(list).siblings().removeClass("active");
                 $(this).siblings("div").children("span").addClass("mui-icon-arrowdown").removeClass("mui-icon-arrowup")
                console.log($(this).siblings("div").children("span"));
            })
            var target;

            function render(id) {
                $.ajax({
                    url: "http://mmb.ittun.com/api/getcategory",
                    data: {
                        titleid: id
                    },
                    type: "GET",
                    success: function (backdata) {
                        var seccatehtml = template("seccateitem", backdata);
                        target = ".ul1" + id;
                        console.log(target);
                        $(target).html(seccatehtml);

                    }
                })
            }
        }
    })


})