$(function(){
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
    var lasturl=window.location.href;
    console.log(lasturl);
     var id=parseURL(lasturl).id;
     console.log(id);
     $.ajax({
         url:"http://mmb.ittun.com/api/getproduct",
         data:{productid:id},
         type:"GET",
         success:function(backdata){
             var productlisthtml=template("productdetail",backdata);
             $('.detail-head').html(productlisthtml);
         }
     })
     $.ajax({
         url:"http://mmb.ittun.com/api/getproductcom",
         data:{productid:id},
         type:"GET",
         success:function(backdata){
            var comhtml=template("comitem",backdata);
            $('.comm').html(comhtml);
         }
     })

})