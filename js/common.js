(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 750) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);

})(document, window);

//window.onload = function() {
//    var container = document.getElementById("container");
//    var list = document.getElementById("list");
//    var button = document.getElementById("button").getElementsByTagName("span");
//    var prev = document.getElementById("prev");
//    var next = document.getElementById("next");
//    var index = 1;
//
//    function showButton() {
//        for (var i = 0; i < button.length; i++) {
//            if (button[i].className == "on") {
//                button[i].className = " ";
//                break;
//            }
//        }
//        button[index - 1].className = "on";
//    }
//
//    function animate(offset) {
//        var newLeft = parseInt(list.style.left) + offset;
//        list.style.left = newLeft + "px";
//        if (newLeft < -2400) {
//            list.style.left = -1200 + "px";
//        }
//        if (newLeft > -1200) {
//            list.style.left = -2400 + "px";
//        }
//
//    }
//    next.onclick = function() {
//        if (index == 2) {
//            index = 1;
//        } else {
//            index += 1;
//        }
//        showButton();
//        animate(-1200);
//        // index += 1;
//    }
//    prev.onclick = function() {
//        if (index == 1) {
//            index = 2;
//        } else {
//            index -= 1;
//        }
//        animate(1200);
//        showButton();
//    }
//
//}