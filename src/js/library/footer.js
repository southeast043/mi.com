import { $ } from "./jquery.js";

let footer = $(function () {

    // 侧边栏
    $(document).scroll(function () {
        // 回顶部
        if ($(document).scrollTop() >= 800) {
            $('.sidebar>:nth-last-child(1)').css('display', 'block');
        } else if ($(window).scrollTop() < 800) {
            $('.sidebar>:nth-last-child(1)').css('display', 'none');
        }
    });

    $('.sidebar>a>li').on('mouseover', function () {
        // 鼠标悬停
        let index = $('.sidebar>a>li').index(this);

        $('.bg1').eq(index).stop().animate({
            'opacity': '0'
        }, 200);
        $('.bg2').eq(index).stop().animate({
            'opacity': '1'
        }, 200);

        $('.sidebar>a>li').on('mouseout', function () {
            // 鼠标移出

            $('.bg1').eq(index).stop().animate({
                'opacity': '1'
            }, 200);
            $('.bg2').eq(index).stop().animate({
                'opacity': '0'
            }, 200);
        })
    })

    // 底部
    setInterval(function () {
        $('.footer-content>.clr>:nth-last-child(1)>.none').removeClass('none').siblings().addClass('none');
    }, 1000);
})
export { footer };