import { $ } from "./jquery.js";

const header = function () {

    // 弹出层
    $('.register').on('click', function () {
        $('.jump').css('display', 'block')
    })
    $('.remove-jump').on('click', function () {
        $('.jump').css('display', 'none')
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
}

export { header };