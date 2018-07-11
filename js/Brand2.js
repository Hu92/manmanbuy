$(function () {
    $('.totop').click(function () {
        mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100)
    })
    $('.Brand-close').click(function () {
        $('footer').hide();
    })
    $('.Brand-open').click(function () {
        window.location.href = 'http://m.manmanbuy.com/app.html?type=foot_top10aspx&value=wapfoot'
    });
    var brandTitleId = parseURL(window.location.href).brandTitleId;
    $.ajax({
        url: 'http://mmb.ittun.com/api/getbrand',
        data: {
            brandtitleid: brandTitleId,
        },
        success: function (response) {
            var sortlisthtml = template('sortlist', response)
            $('.content').html(sortlisthtml);

        }
    })
    $.ajax({
        url: 'http://mmb.ittun.com/api/getbrandproductlist',
        data: {
            brandtitleid: brandTitleId,
            pagesize: 4
        },
        success: function (response) {
            template.defaults.escape = false;
            var tvlisthtml = template('tvlist', response)
            $('.tvtoplist').html(tvlisthtml);

            var productId = $('.tvlist').eq(0).data('id')
            console.log(productId);
            render(productId);
        }
    })

    function render(param) {
        $.ajax({
            url: 'http://mmb.ittun.com/api/getproductcom',
            data: {
                productid: param
            },
            success: function (response) {
                console.log(response);
                // template.defaults.escape=false;
                var commenthtml = template('commentid', response)
                $('.comment').html(commenthtml);

            }
        })
    }



















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

})