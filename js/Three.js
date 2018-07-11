$(function(){
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
   });

  

    setTimeout(function() {
                    mui(".mui-scroll-wrapper").pullRefresh().endPulldownToRefresh();
                }, 1000);
    mui.init(
        {
        pullRefresh : {
          container:".mui-scroll-wrapper",
         
          down : {
            style:'circle',
            auto: true, //页面刷新自动启动下拉刷新
            callback: function() {
                //下拉后，要做的事件， 就是这个回调函数的功能
               
            }
          }
        }
      }
    );

   
      $.ajax({  
                url: "http://mmb.ittun.com/api/getmoneyctrl",
                 data:{pageid:1},
                 success: function(data) {
                    //console.log(data);
                  var html =template('carcontent',data);
                  $('.moban').html(html);
                 }
            });
        
          $('#refreshContainer').on('tap',".right",function(){
           //$(this).data('id');
           //console.log($(this).data('id'));
          goto('./03.3-gnzk.html?productId='+$(this).data('id'));
          })  
   }); 

      