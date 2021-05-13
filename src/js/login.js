import { $ } from "./library/jquery.js"

$(function () {

    // 切换登录注册
    $('.login-btn').on('click', function () {
        $('.content-title>:nth-child(3)').stop().animate({
            'left': '0'
        }, 400);
        $('.login-btn').addClass('active');
        $('.register-btn').removeClass('active');
        $('.content-con>div').stop().animate({
            'left': '0'
        }, 400);
    })
    $('.register-btn').on('click', function () {
        $('.content-title>:nth-child(3)').stop().animate({
            'left': '64px'
        }, 400);
        $('.register-btn').addClass('active');
        $('.login-btn').removeClass('active');
        $('.content-con>div').stop().animate({
            'left': '-720px'
        }, 400);
    })

    // 切换手机密码登录
    $('.login-phone').on('click', function () {
        $('.login1').removeClass('show');
        $('.login2').addClass('show');
    })
    $('.login-password').on('click', function () {
        $('.login2').removeClass('show');
        $('.login1').addClass('show');
    })

    // input点击
    $('.input>input').on('focus', function () {

        $(this).css({
            'background-color': '#fff'
        }).parent().css({
            'border': '2px solid #ff5c00'
        }).find('p').stop().animate({
            'font-size': '12px',
            'top': '10px'
        }, 200).css('color', '#bbb')

        $('.input>input').on('blur', function () {

            $(this).parent().css('border', 'none')

            if ($(this).val() == '') {
                $(this).css({
                    'background-color': 'rgba(252,242,243)'
                }).parent().find('p').stop().animate({
                    'font-size': '17px',
                    'top': '20px'
                }, 200).css('color', '#f04645').parent().next().css('display', 'block')
            } else (
                $(this).css({
                    'background-color': 'rgba(0,0,0,0.03)'
                }).parent().next().css('display', 'none')
            )
        })
    })

    // 显示密码
    $('.input>.iconfont').on('click', function () {

        if ($(this).hasClass('icon-yanjing1')) {

            $(this).addClass('icon-yanjing').removeClass('icon-yanjing1');
            $(this).siblings('input').attr('type', 'text');

        } else if ($(this).hasClass('icon-yanjing')) {

            $(this).addClass('icon-yanjing1').removeClass('icon-yanjing');
            $(this).siblings('input').attr('type', 'password');
        }
    })
})