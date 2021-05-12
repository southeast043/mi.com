import { $ } from "../js/library/jquery.js";
import { header } from "../js/library/header.js";
import { footer } from "../js/library/footer.js";

$(function () {

    // 头部
    header;

    // 秒杀

    // 倒计时
    let timer = new Date(9999, 1, 1, 0, 0, 0); // 未来时间

    setInterval(function () {
        let current = new Date();
        let ms = timer - current;
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



