import { $ } from "./library/jquery.js"

$(function () {

    $('.countrybox').on('click', function () {
        if ($(this).children('.country').hasClass('show')) {
            $(this).children('.country').removeClass('show');
        } else {
            $(this).children('.country').addClass('show');
        }
    })

    $('.phonenumber>div>:first').on('click', function () {
        if ($(this).siblings('.country').hasClass('show')) {
            $(this).siblings('.country').removeClass('show');
        } else {
            $(this).siblings('.country').addClass('show');
        }
    })

    let input = $('.phonenumber>div>input');
    let phone = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/

    $('button').attr('disabled', true);

    input.on('focus', function () {
        $('.none').removeClass('show');
        $('.error').removeClass('show');

        if (input.val() == '请输入手机号码') {
            input.val('');
        }
    })
    input.on('blur', function () {
        if (input.val() == '') {
            $('.none').addClass('show');
            input.val('请输入手机号码');
            $('button').attr('disabled', true);
        } else if (!phone.test(input.val())) {
            $('.error').addClass('show');
            $('button').attr('disabled', true);
        } else {
            $('button').attr('disabled', false);
        }
    })
})