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
        }).children('p').stop().animate({
            'font-size': '12px',
            'top': '10px'
        }, 200).css('color', '#bbb')

        $(this).siblings('div').css({
            'background-color': '#fff'
        })

        $('.input>input').on('blur', function () {

            // 失去焦点
            $(this).parent().css('border', 'none')

            if ($(this).val() == '') {

                $(this).css({
                    'background-color': 'rgba(252,242,243)'
                }).parent().children('p').stop().animate({
                    'font-size': '17px',
                    'top': '20px'
                }, 200).css({
                    'color': '#f04645'
                }).parent().next().css('display', 'block')

                $(this).siblings('div').css({
                    'background-color': 'rgba(252,242,243)'
                }).children(':first').children(':first').css({
                    'color': '#f04645'
                })

            } else {
                $(this).css({
                    'background-Fcolor': 'rgba(0,0,0,0.03)'
                }).parent().next().css('display', 'none')

                $(this).siblings('div').children(':first').children(':first').css({
                    'color': '#aaa'
                })

            }
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

    // 国家
    $('.phone>:nth-child(1)').on('click', function () {
        if ($(this).children('.country').css('display') == 'none') {
            $(this).children('.country').css('display', 'block');
            $(this).children('span').css('transform', 'rotateZ(180deg)')
        } else if ($(this).children('.country').css('display') == 'block') {
            $(this).children('.country').css('display', 'none');
            $(this).children('span').css('transform', 'rotateZ(0deg)')
        }
    })
    $('.bigphone').on('click', function () {
        if ($(this).children('.country').css('display') == 'none') {
            $(this).children('.country').css('display', 'block');
            $(this).children('span').css('transform', 'rotateZ(180deg)')
        } else if ($(this).children('.country').css('display') == 'block') {
            $(this).children('.country').css('display', 'none');
            $(this).children('span').css('transform', 'rotateZ(0deg)')
        }
    })


    // 按钮

    $('button').attr('disabled', true);

    $("input").change(function () {

        let input = $(this).parent().parent().find('input')
        let i = 1;

        input.each(elm => {
            if (!$(input[elm]).val()) i = 0;
        });

        if (i) {
            $(this).parent().parent().find('button').attr('disabled', false).stop().animate({
                'opacity': '1'
            }), 300;
        } else {
            $(this).parent().parent().find('button').attr('disabled', true).stop().animate({
                'opacity': '0.5'
            }), 300;
        }
    });

})