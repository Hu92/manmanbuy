$(function(){
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
	
	function render(){
		$.ajax({
			url: "http://mmb.ittun.com/api/getinlanddiscount",
			success: function(response){
				console.log(response);
				var listHtml = template("queryList",response);
				$(".main ul").html(listHtml);
			}
		});
	}
	
	render();
	

	var count = 1;
	//上拉加载
	mui.init({
	  pullRefresh : {
	    container: "#pullrefresh",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
	    up : {

	      contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容

	      callback : function(){
	      	
	      	setTimeout(function(){
	      		$.ajax({
					url: "http://mmb.ittun.com/api/getinlanddiscount",
					success: function(response){
						mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2));
						var listHtml = template("queryList",response);
						$(".main ul").append(listHtml);
					}
				});
	      	},1500);
	      } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
	    }
	  }
	});
	
	//回到顶部
	$("#topping").click(function(){
		mui('.mui-scroll-wrapper').scroll().scrollTo(0,0,100);//100毫秒滚动到顶
	});

	$(".main ul").on('tap', 'li a .list', function () {
		var id=$(this).data("id")
		console.log(id);
		window.location.href="03.3-gnzk.html?productId="+id;
	 })
})
