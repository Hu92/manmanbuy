$(function(){
    $.ajax({
        url:'http://mmb.ittun.com/api/getcoupon',
        type:'GET',
        success:function(backdata){
            console.log(backdata);
            var yhjhtml =template('yhj',backdata);
            $('.bdul').html(yhjhtml);
            
        }
    })
    $('.mui-icon-back').click(function(){
        back();
    })

    $('.bdul').on('click','li',function(){
        goto('./list.html?id='+$(this).data('id'));
    })
})