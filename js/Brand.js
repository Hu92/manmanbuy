$(function () {
    $.ajax({
        url: 'http://mmb.ittun.com/api/getbrandtitle',
        success: function (response) {
            var Brandhtml = template('Brandid', response)
            $('.content').html(Brandhtml);

        }
    })
    $('.totop').click(function () {
        mui('.mui-scroll-wrapper').scroll().scrollTo(0, 0, 100)
    })
    $('.Brand-close').click(function () {
        $('footer').hide();
    })
    $('.Brand-open').click(function () {
        window.location.href = 'http://m.manmanbuy.com/app.html?type=foot_top10aspx&value=wapfoot'
    });
    $('.content').on('click','.con',function () { 
        window.location.href = './10-Brand2.html?brandTitleId='+$(this).data('id');
     })
})