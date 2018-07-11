$(function(){
    var id = urlTool(window.location.href).id;
    // console.log(id);

    $.ajax({
        url:'http://mmb.ittun.com/api/getcouponproduct',
        data:{couponid:id},
        success:function(backdata){
            // console.log(backdata);
            var parhtml = template('par',backdata);
            $('.particulars').html(parhtml);
            
        }
    })

    $('.mui-icon').click(function(){
        back();
    })


      $('.particulars').on('click','li',function(){
        //   alert('aaa');
       var img = $(this).data('tu');
       $('#galleryOverlay').html(img)
        $('#galleryOverlay').css({
            'display': 'block'
        }).click(function(){
            $('#galleryOverlay').css({
                'display': 'none'
            })
        })
        $('#galleryOverlay').addClass('visible');
      })
})