define([
    '../controllers'
], function(conApp) {
    'use strict';
    //console.log('productCon');
    conApp.controller('productCon', function() {
        //console.log('productConFN');

        (function(doc,win){
            var box = $('.yewul1');
            var ul  = box.children('ul');
            var li  = ul.children('li');
            var w   = li.outerWidth(true);
            var len = li.length;
            var index = 0;
            var ul = $('.yewul1 ul');
            var w  = ul.children('li').outerWidth(true);
            var len = ul.children('li').length;


            $('.you1').click(function(){
                if(len < 3){
                    return
                }
                ul.stop().animate({
                    left : -w
                },600,function(){
                    ul.children().first().appendTo(ul);
                    ul.css('left',0);
                });
            });
            $('.zuo1').click(function(){
                if(len < 3){
                    return
                }
                ul.children().last().prependTo(ul);
                ul.css('left',-w);
                ul.stop().animate({
                    left : 0
                },600);
            });

            //点击产品图放大
            $('#mask').click(function() {
                $('#mask').css('display','none');
            })
            //console.log($('#mask'));


            var showList = $('#lshape li a img');
            for (var i = 0; i < showList.length; i++) {
                showList.eq(i).click(function () {
                    $('#maskImg').attr("src",this.src);
                    $('#mask').css('display','block');
                });
                //console.log(showList.eq(i));
                //console.log(showList[i]);
            };
//==================TShape===============================
            var showListt = $('#tshape li a img');
            for (var i = 0; i < showListt.length; i++) {
                showListt[i].onclick=function () {
                    $('#maskImg').attr("src",this.src);
                    $('#mask').css('display','block');
                };
            };
            var box2 = $('.yewul2');
            var ul2  = box2.children('ul');
            var li2  = ul2.children('li');
            var w2   = li2.outerWidth(true);
            var len2 = li2.length;
            //var index2 = 0;
            var w2  = ul.children('li').outerWidth(true);
            var ul2 = $('.yewul2 ul');
            var len2 = ul.children('li').length;
            $('.you2').click(function(){
                if(len2 < 3){
                    return
                }
                ul2.stop().animate({
                    left : -w2
                },600,function(){
                    ul2.children().first().appendTo(ul2);
                    ul2.css('left',0);
                });
            });
            $('.zuo2').click(function(){
                if(len2 < 3){
                    return
                }
                ul2.children().last().prependTo(ul2);
                ul2.css('left',-w2);
                ul2.stop().animate({
                    left : 0
                },600);
            });
//================== Acrylic Cosmetics Display===============================
            var showList3 = $('#cos li a img');
            for (var i = 0; i < showList3.length; i++) {
                showList3[i].onclick=function () {
                    $('#maskImg').attr("src",this.src);
                    $('#mask').css('display','block');
                };
            };
            var ul3 = $('.yewul3 ul');
            var li3  = ul3.children('li');
            var w3   = li3.outerWidth(true);
            var len3 = li3.length;
            var len3 = ul3.children('li').length;
            $('.you3').click(function(){
                if(len3 < 3){
                    return
                }
                ul3.stop().animate({
                    left : -w3
                },600,function(){
                    ul3.children().first().appendTo(ul3);
                    ul3.css('left',0);
                });
            });
            $('.zuo3').click(function(){
                if(len3 < 3){
                    return
                }
                ul3.children().last().prependTo(ul3);
                ul3.css('left',-w3);
                ul3.stop().animate({
                    left : 0
                },600);
            });

//==================LED===============================
//            var ledA=$('.led li a');
            var showList4 = $('#led li a img');
            for (var i = 0; i < showList4.length; i++) {
                showList4[i].onclick=function () {
                    $('#maskImg').attr("src",this.src);
                    $('#mask').css('display','block');
                };

                //ledA.onmouseover=function(){
                //    .showList4.attr("src",);
                //}

            };




            //var box = $('.yewul1');
            //var ul  = box.children('ul');
            var ul4 = $('.yewul4 ul');
            var li4  = ul4.children('li');
            var w4   = li4.outerWidth(true);
            var len4 = li4.length;
            //var index = 0;
            //var w4  = ul.children('li').outerWidth(true);
            //var len4 = ul.children('li').length;
            $('.you4').click(function(){
                if(len4 <= 3){
                    return
                }
                ul4.stop().animate({
                    left : -w4
                },600,function(){
                    ul4.children().first().appendTo(ul4);
                    ul4.css('left',0);
                });
            });
            $('.zuo4').click(function(){
                if(len4 <= 3){
                    return
                }
                ul4.children().last().prependTo(ul4);
                ul4.css('left',-w4);
                ul4.stop().animate({
                    left : 0
                },600);
            });


        })(document,window);
    });
});
