define([
    '../controllers'
], function (conApp) {
    'use strict';
    conApp.controller('indexCon', function ($scope, $http) {
        $scope.baseURL = "";
        $scope.yzm = $scope.baseURL + "img/checkcode.php";//获取验证码图片
        $scope.txtyzm = "";//输入的验证码
        $scope.yzmflag = true;//判断验证码输入是否正确,true为不正确
        $scope.Sub = false;
        //获取cookie中的值
        $scope.getCookie = function (cookie_name) {
            var allcookies = document.cookie;
            var cookie_pos = allcookies.indexOf(cookie_name);   //索引的长度  
            // 如果找到了索引，就代表cookie存在，  
            // 反之，就说明不存在。  
            if (cookie_pos != -1) {
                // 把cookie_pos放在值的开始，只要给值加1即可。  
                cookie_pos += cookie_name.length + 1;      //这里我自己试过，容易出问题，所以请大家参考的时候自己好好研究一下。。。  
                var cookie_end = allcookies.indexOf(";", cookie_pos);
                if (cookie_end == -1) {
                    cookie_end = allcookies.length;
                }
                var value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。。。  
            }
            return value;
        }
        //检测用户输入的验证码
        $scope.$watch("txtyzm", function () {
            if ($scope.txtyzm == $scope.getCookie("verification")) {
                $scope.yzmflag = false;
            }
            else {
                $scope.yzmflag = true;
            }
            //console.log($scope.yzmflag);
            //console.log( $scope.getCookie("verification"));
        });
        //重新获取新的验证码
        $scope.changing = function () {
            $scope.yzm = $scope.baseURL + "img/checkcode.php?" + Math.random();
        }
        $scope.subMail = function () {
            $scope.Sub = true;
            console.log($scope.data);
            $scope.pData = Object;
            $scope.pData.Name = $scope.Name;
            $scope.pData.Email = $scope.Email;
            $scope.pData.Services = $scope.Services;
            $scope.pData.Suburb = $scope.Suburb;
            $scope.pData.Phone = $scope.Phone;
            $scope.pData.Comment = $scope.Comment;
            $http({
                method: "POST",
                url: $scope.baseURL + "sendMail.php",
                data:$.param($scope.pData),
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).success(function(response){
                console.log(response);
                alert("发送成功");
            });
        }
        var headerTop=document.getElementsByClassName("header-top");
        var aButton = document.getElementById("example-navbar-collapse").getElementsByTagName("a");
        var collapse=document.getElementById("example-navbar-collapse");
        //遍历所有的aButton
        function delBackgroundColor() {
            for (var i = 0; i < aButton.length; i++) {
                aButton[i].style.color = '#4c4c4c';
            }
        }
        for (var i = 0; i < aButton.length; i++) {
            //aButton[i].style.color = '#fff';
            aButton[i].onclick = function () {
                delBackgroundColor();
                this.style.color = "#e76c00";
            }
        }

        window.onscroll = function () {
            var headerTop = document.getElementById("header-top");
            function nextPage() {
                var scrollHeight = window.pageYOffset ||
                    document.documentElement.scrollTop ||
                    document.body.scrollTop || 0;
                //console.log(scrollHeight);
                return scrollHeight;
            }
            if (nextPage() < 20) {
                headerTop.className = "header-top";
                return;
            }
            else {
                headerTop.className = "header-top-no";
            }

            // function changeStyle() {
            //     //headerTop.style.cssText({background:"#fff",position:"fixed"});
            //     headerTop.style.background = '#fff';
            //     headerTop.style.position = 'fixed';
            //     headerTop.style.height = 'auto';
            //     headerTop.style.transition = "all 1s ease";
            // }

            // changeStyle();
        };

        //轮播图

        //var container = document.getElementById("container");
        //var list = document.getElementById("list");
        //var button = document.getElementById("button").getElementsByTagName("span");
        //var prev = document.getElementById("prev");
        //var next = document.getElementById("next");
        //var index = 1;
        //var screenWindth = document.documentElement.clientWidth;//屏幕宽度
        ////优化:当animate动画执行时,点击箭头或圆点,不再次出发animate;图片切换完了,点击才有效
        //var animated = false;//默认初始图片未运动
        //var timer;//存放定时器
        //
        //function showButton() {
        //    for (var i = 0; i < button.length; i++) {
        //        if (button[i].className == "on") {
        //            button[i].className = " ";
        //            break;
        //        }
        //    }
        //    button[index - 1].className = "on";
        //}
        //
        //function animate(offset) {
        //    animated = true;
        //    var newLeft = parseInt(list.style.left) + offset;//目标值
        //    var time = 500;//切换一张图的总时长
        //    var interval = 10;//位移间隔时长
        //    var speed = offset / (time / interval);//每次位移量
        //    //位移值 = 现在的left值 + 位移量
        //    function go() {
        //        if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
        //            //满足if条件期间,间隔时间位移
        //            list.style.left = parseInt(list.style.left) + speed + 'px';
        //            setTimeout(go, interval);//递归go函数,实现animate动画
        //        } else {
        //            //位移结束时的状态
        //            animated = false;
        //            animated = false;
        //            list.style.left = newLeft + "px";
        //            if (newLeft < -2 * screenWindth) {
        //                list.style.left = -screenWindth + "px";
        //            }
        //            if (newLeft > -screenWindth) {
        //                list.style.left = -2 * screenWindth + "px";
        //            }
        //        }
        //    }
        //    go();
        //}
        ////自动播放,每隔5s中调一次next.onclick
        ////function play() {
        ////    timer = setInterval(function () {
        ////        next.onclick();
        ////    }, 3000);
        ////}
        ////鼠标移到图片上,动画停止
        //function stop() {
        //    clearInterval(timer);
        //}
        //
        //next.onclick = function () {
        //    if (index == 2) {
        //        index = 1;
        //    } else {
        //        index += 1;
        //    }
        //    showButton();
        //    //!animated相当于animated==false
        //    if (!animated) {
        //        animate(-screenWindth);
        //    }
        //    // index += 1;
        //}
        //prev.onclick = function () {
        //    if (index == 1) {
        //        index = 2;
        //    } else {
        //        index -= 1;
        //    }
        //    if (!animated) {
        //        animate(screenWindth);
        //    }
        //    showButton();
        //}
        ////按钮切换
        //for (var i = 0; i < button.length; i++) {
        //    button[i].onclick = function () {
        //        if (this.className == "on") {
        //            return;
        //        }
        //        var myIndex = parseInt(this.getAttribute("index"));
        //        var offset = -screenWindth * (myIndex - index);
        //
        //        if (!animated) {
        //            animate(offset);
        //        }
        //        index = myIndex;
        //        showButton();
        //    }
        //}
        //
        //
        //container.onmouseover = stop;
        ////container.onmouseout = play;
        //
        //
        //
        //
        //
    });
});
