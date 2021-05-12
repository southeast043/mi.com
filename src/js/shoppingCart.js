import { $ } from "../js/library/jquery.js";
import { footer } from "../js/library/footer.js";

$(function () {

    $('.header-c>:nth-child(3)>:first-child').on('mouseover', function () {
        $('.header-c>:nth-child(3)>:last-child').stop().animate({
            'height': '150px'
        }, 300)

        $('.header-c>:nth-child(3)>:last-child').on('mouseover', function () {
            $('.header-c>:nth-child(3)>:last-child').stop().animate({
                'height': '150px'
            }, 300)

            $('.header-c>:nth-child(3)>:last-child').on('mouseout', function () {
                $('.header-c>:nth-child(3)>:last-child').stop().animate({
                    'height': '0'
                }, 300)
            })

            $('.header-c>:nth-child(3)>:first-child').on('mouseout', function () {
                $('.header-c>:nth-child(3)>:last-child').stop().animate({
                    'height': '0'
                }, 300)
            })
        })
    })


    //底部
    footer;
})