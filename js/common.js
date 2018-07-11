var screenWidth = window.screen.width;
document.querySelector("html").style.fontSize = screenWidth >= 414 ? "41.4px" : screenWidth / 10 + "px";


$(function () {
    // 内部滚动
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    
});


// 拼接
function urlTool(url) {
    //把数组的最后一个元素弹出并返回
    var params = url.split("?").pop().split("&");

    var paramObj = {};
    params.forEach(function (obj) { 
        // console.log(obj);
        var kv = obj.split("=");
        //console.log(kv);
        paramObj[kv[0]] = kv[1];
    });

    return paramObj;
}
// 从当前页跳转到某页
 function goto(url) {
    window.sessionStorage.setItem("lastpage", window.location.href);
    window.location.href = url;
}

//从当前页，返回上一级页面
function back () {
    var lasturl = window.sessionStorage.getItem("lastpage");
    if (!lasturl) lasturl = "./index.html";
    window.location.href = lasturl;
    window.sessionStorage.removeItem("lastpage");
}

//获取某个数组的index
Array.prototype.indexOf = function (val) {
    for(var i = 0; i < this.length; i++){
        if(this[i] == val){return i;}
    }
    return -1;
}

//删除某个数组元素
Array.prototype.remove = function (val) {
    var index = this.indexOf(val);
    if(index > -1){this.splice(index,1);}
}

//去重
Array.prototype.norepeat = function () {
    var arr = this,
        result = [],
        i,
        j,
        len = arr.length;
    for (i = 0; i < len; i++) {
        for (j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
                j = ++i;
            }
        }
        result.push(arr[i]);
    }
    return result;
}

// 检查是否登录

function checkLogin(data) {
    if (data.error == 400) {
        //说明在调用某个接口返回数据时没有登录， 就跳转到登录页面
        window.location.href = "login.html";
    }
}
