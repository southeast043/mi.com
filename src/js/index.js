import { $ } from "../js/library/jquery.js";
import { header } from "../js/library/header.js";
import { footer } from "../js/library/footer.js";
// import "../js/library/jquery.lazyload"

$(function () {

    // $("img.lazy").lazyload({effect: "fadeIn"});

    // 头部
    header;

    // 秒杀

    let box = $('.sekill-content>:nth-child(2)>div'),
        leftBtn = $('.sekill-title>p>.glyphicon-menu-left'),
        rightBtn = $('.sekill-title>p>.glyphicon-menu-right'),
        left = parseInt(box.css('left')),
        boxWidth = box.innerWidth(),
        width = $('.sekill-content>:nth-child(2)').innerWidth(),
        index = 0,
        timmer;

    leftBtn.on('click', function () {
        prev();
    })
    rightBtn.on('click', function () {
        next();
    })
    function next() {
        left = left - width - 14;
        index++;
        if (left < -boxWidth + width) {
            left = -boxWidth + width + 14;
            index = -1;
        };
        box.stop().animate({
            'left': left
        }, 1000);
    }
    function prev() {
        index--;
        left = left + width + 14;
        if (left > 0) {
            left = 0;
            index = 0;
        };
        box.stop().animate({
            'left': left
        }, 1000);
    }

    timmer = setInterval(function () {
        if (index != -1) {
            next();
        } else if (index == -1) {
            console.log(1)
            left = 0;
            box.stop().animate({
                'left': left
            }, 1000);
            index = 0;
        }
    }, 5000);

    // 倒计时
    let day = new Date(9999, 1, 1, 0, 0, 0); // 未来时间

    setInterval(function () {
        let current = new Date();
        let ms = day - current;
        let s = ms / 1000; // 获得秒
        let hour = parseInt(s % 86400 / 3600);
        let min = parseInt(s % 3600 / 60);
        let sec = parseInt(s % 60);
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;
        if (sec < 10) sec = "0" + sec;
        $('.sekill-content>div>:nth-child(4)>:nth-child(1)').text(hour);
        $('.sekill-content>div>:nth-child(4)>:nth-child(3)').text(min);
        $('.sekill-content>div>:nth-child(4)>:nth-child(5)').text(sec);
    }, 1000);

    // 家电
    $('.title>ul>li').on('mouseover', function () {
        let index = $('.title>ul>li').index(this);

        $(this).addClass('active').siblings().removeClass('active');
        $('.cont>div').eq(index + 3).addClass('show').siblings().removeClass('show');
    })

    // 底部
    footer;
})



