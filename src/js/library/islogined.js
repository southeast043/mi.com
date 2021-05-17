import { $ } from "./jquery.js";
import cookie from './cookie.js';

const isLogined = function () {

    let shop = cookie.get('shop');
    let username = cookie.get('username');
    let isLogined = cookie.get('isLogined');

    let mine = `
    ${username}
    <span class="glyphicon glyphicon-chevron-down"></span>
    <ul>
        <li>个人中心</li>
        <li>评价晒单</li>
        <li>我的喜欢</li>
        <li>小米账户</li>
        <li class="loginout">退出登录</li>
    </ul>
    `;
    $('.mine').html(mine);

    if (isLogined) {
        $('.h-1').addClass('h-hide').removeClass('h-show');
        $('.h-2').addClass('h-show').removeClass('h-hide');

        if (shop != '[]' && shop) {
            shop = JSON.parse(shop);

            let idList = shop.map(el => el.id).join();
            let dropHeigth = 1;
            shop.map(() => dropHeigth++);
            dropHeigth *= 100;

            $.ajax({
                type: "get",
                url: "../../interface/getItems.php",
                data: { idList: idList },
                dataType: "json",
                success: function (res) {
                    let shoppingCart = '';
                    let num = 0;
                    let sum = 0;

                    res.forEach(elm => {
                        // let picture = JSON.parse(elm.picture);
                        let pic = JSON.parse(elm.home)[0].src;
                        let type = JSON.parse(elm.type)[0];

                        // 让ajax请求到的数据结果中遍历后的id与cookie中数据的id 相同
                        let current = shop.filter(val => val.id == elm.id);

                        num += current[0].num;
                        sum += type.price * current[0].num;

                        shoppingCart += `
                        <div class="clr">
                            <img src="../${pic}" alt="" class="fl">
                            <p class="fl">${elm.title}</p>
                            <span>${type.price}元 × ${current[0].num}</span>
                            <span class="remove" data-id="${current[0].id}">&times;</span>
                        </div>
                        `;
                    });

                    shoppingCart += `
                    <div class="clr">
                        <div class="fl">
                            <p>共${num}件商品</p>
                            <p><span>${sum}</span>元</p>
                        </div>
                        <div class="fr">去购物车结算</div>
                    </div>
                    `;

                    $('.car-drop').html(shoppingCart);
                    $('.shopnumber').html(num);

                    $('.remove').on('click', function () {
                        let res = shop.filter(el => el.id != $(this).attr('data-id'));
                        cookie.set('shop', JSON.stringify(res), 1);
                        location.reload();
                    });
                }
            });

            // 购物车
            $('.car').css({
                'background-color': '#ff6700',
                'color': '#fff'
            }).children('span').css('color', '#fff');

            $('.car').on('mouseover', function () {

                $('.car-drop').stop().animate({
                    'height': dropHeigth
                }, 300)

                $('.car').css({
                    'background-color': '#fff',
                    'color': '#ff6700'
                }).children('span').css('color', '#ff6700');

                $('.car-drop').on('mouseover', function () {
                    $('.car-drop').stop().css({
                        'height': dropHeigth
                    })

                    $('.car').css({
                        'background-color': '#fff',
                        'color': '#ff6700'
                    }).children('span').css('color', '#ff6700');

                    $('.car-drop').on('mouseout', function () {
                        $('.car-drop').stop().animate({
                            'height': '0'
                        }, 300, function () {
                            $('.car').css({
                                'background-color': '#ff6700',
                                'color': '#fff'
                            }).children('span').css('color', '#fff');
                        })
                    })

                    $('.car').on('mouseout', function () {
                        $('.car-drop').stop().animate({
                            'height': '0'
                        }, 300, function () {
                            $('.car').css({
                                'background-color': '#ff6700',
                                'color': '#fff'
                            }).children('span').css('color', '#fff');
                        })

                    })

                })
            })
        } else {
            // 购物车
            $('.car').on('mouseover', function () {

                $('.car-drop').stop().animate({
                    'height': '100px'
                }, 300)

                $('.car').css({
                    'background-color': '#fff',
                    'color': '#ff6700'
                }).children('span').css('color', '#ff6700')


                $('.car-drop').on('mouseover', function () {
                    $('.car-drop').stop().css({
                        'height': '100px'
                    })

                    $('.car').css({
                        'background-color': '#fff',
                        'color': '#ff6700'
                    }).children('span').css('color', '#ff6700')

                    $('.car-drop').on('mouseout', function () {
                        $('.car-drop').stop().animate({
                            'height': '0'
                        }, 300, function () {
                            $('.car').css({
                                'background-color': '#3f3f3f',
                                'color': '#b0b0b0'
                            }).children('span').css('color', '#b0b0b0')
                        })
                    })

                    $('.car').on('mouseout', function () {
                        $('.car-drop').stop().animate({
                            'height': '0'
                        }, 300, function () {
                            $('.car').css({
                                'background-color': '#3f3f3f',
                                'color': '#b0b0b0'
                            }).children('span').css('color', '#b0b0b0')
                        })
                    })
                })
            })
        }
    } else {

        // 购物车
        $('.car').on('mouseover', function () {

            $('.car-drop').stop().animate({
                'height': '100px'
            }, 300)

            $('.car').css({
                'background-color': '#fff',
                'color': '#ff6700'
            }).children('span').css('color', '#ff6700')


            $('.car-drop').on('mouseover', function () {
                $('.car-drop').stop().css({
                    'height': '100px'
                })

                $('.car').css({
                    'background-color': '#fff',
                    'color': '#ff6700'
                }).children('span').css('color', '#ff6700')

                $('.car-drop').on('mouseout', function () {
                    $('.car-drop').stop().animate({
                        'height': '0'
                    }, 300, function () {
                        $('.car').css({
                            'background-color': '#3f3f3f',
                            'color': '#b0b0b0'
                        }).children('span').css('color', '#b0b0b0')
                    })
                })

                $('.car').on('mouseout', function () {
                    $('.car-drop').stop().animate({
                        'height': '0'
                    }, 300, function () {
                        $('.car').css({
                            'background-color': '#3f3f3f',
                            'color': '#b0b0b0'
                        }).children('span').css('color', '#b0b0b0')
                    })
                })
            })
        })
    }

    $('.loginout').on('click', function () {
        cookie.remove('username');
        cookie.remove('isLogined');
        location.reload();
    })
}

export { isLogined }