import { $ } from "../js/library/jquery.js";

$(function () {

    // 弹出层
    $('.register').on('click', function () {
        $('.jump').css('display', 'block')
    })
    $('.remove-jump').on('click', function () {
        $('.jump').css('display', 'none')
    })

    // 购物车
    $('.car').on('mouseover', function () {

        $('.car-drop').stop().animate({
            'height': '100px'
        }, 300)

        $('.car').css({
            'background-color': '#fff',
            'color': '#ff6700'
        })

        $('.car>span').css({
            'color': '#ff6700'
        })

        $('.car').on('mouseout', function () {
            $('.car-drop').stop().animate({
                'height': '0'
            }, 300, function () {
                $('.car').css({
                    'background-color': '#3f3f3f',
                    'color': '#b0b0b0'
                })
                $('.car>span').css({
                    'color': '#b0b0b0'
                })
            })

        })

    })

    // logo
    $('.nav-logo>a').on('mousedown', function () {
        $('.nav-logo>a>img').css({
            'width': '50px',
            'height': '50px'
        })
        $('.nav-logo>a').on('mouseup', function () {
            $('.nav-logo>a>img').css({
                'width': '56px',
                'height': '56px'
            })
        })
    })


    // 下拉菜单
    $('.nav-con').on('mouseover', function () {
        // 背景框
        $('.nav-drop>ul').stop().animate({
            'height': '220px'
        }, 300)

        $('.nav-drop>ul').on('mouseover', function () {
            $('.nav-drop>ul').stop().animate({
                'height': '220px'
            })
        })

        $('.nav-drop>ul').on('mouseout', function () {
            $('.nav-drop>ul').stop().animate({
                'height': '0'
            }, 300)
        })

        $('.nav-con').on('mouseout', function () {
            $('.nav-drop>ul').stop().animate({
                'height': '0'
            }, 300)
        })
    })

    $('.nav-con>li').on('mouseover', function () {
        // 内容
        let index = $('.nav-con>li').index(this);

        $('.nav-drop>ul>li').eq(index).addClass('show').siblings().removeClass('show');
    })

    // 搜索框
    $('.nav-search>input').on('focus', function () {
        $('.nav-search>input').css({
            'border': '1px solid #ff6700'
        });
        $('.glyphicon-search').css({
            'border': '1px solid #ff6700'
        })
        $('.nav-search>ul').css({
            'display': 'block'
        })

    })
    $('.nav-search>input').on('blur', function () {
        $('.nav-search>input').css({
            'border': '1px solid #e0e0e0'
        });
        $('.glyphicon-search').css({
            'border': '1px solid #e0e0e0'
        })
        $('.nav-search>ul').css({
            'display': 'none'
        })
    })

    // 秒杀

    // 倒计时
    let futuer = new Date(2021, 9, 30, 18, 0, 0); // 未来时间

    setInterval(function () {
        let current = new Date();
        let ms = futuer - current;
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

    // 侧边栏
    $(window).scroll(function () {
        // 回顶部
        if ($(window).scrollTop() >= 800) {
            $('.sidebar>:nth-last-child(1)').css('display', 'block');
        } else if ($(window).scrollTop() < 800) {
            $('.sidebar>:nth-last-child(1)').css('display', 'none');
        }
    });

    $('.sidebar>a>li').on('mouseover', function () {
        // 鼠标悬停
        let index = $('.sidebar>a>li').index(this);

        $('.bg1').eq(index).css('display', 'none');
        $('.bg2').eq(index).css('display', 'block');

        $('.sidebar>a>li').on('mouseout', function () {
            // 鼠标移出
            // let index = $('.sidebar>a>li').index(this);

            $('.bg2').eq(index).css('display', 'none');
            $('.bg1').eq(index).css('display', 'block');
        })
    })
})
