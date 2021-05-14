import { $ } from "../js/library/jquery.js";
import cookie from './library/cookie.js';
import { footer } from "../js/library/footer.js";

let shop = cookie.get('shop');

if (shop) {
    shop = JSON.parse(shop);

    let idList = shop.map(el => el.id).join();

    $.ajax({
        type: "get",
        url: "../../interface/getItems.php",
        data: { idList: idList },
        dataType: "json",
        success: function (res) {
            let con = '';

            res.forEach(elm => {
                // let picture = JSON.parse(elm.picture);
                let pic = JSON.parse(elm.home)[0].src;
                let type = JSON.parse(elm.type)[0];

                // 让ajax请求到的数据结果中遍历后的id与cookie中数据的id 相同
                let current = shop.filter(val => val.id == elm.id);

                con += `
                    <div>
                        <div class="select select-c"><span class="glyphicon glyphicon-ok" data-id="${elm.id}"></span></div>
                        <div class="img">
                            <img src="../${pic}" alt="">
                        </div>
                        <div class="name">
                            ${elm.title}
                        </div>
                        <div class="price">
                            ${type.price}元
                        </div>
                        <div class="number">
                            <div class="clr">
                                <a><span class="glyphicon glyphicon-minus fl" data-id="${elm.id}"></span></a>
                                <span>${current[0].num}</span>
                                <a><span class="glyphicon glyphicon-plus fr" data-id="${elm.id}"></span></a>
                            </div>
                        </div>
                        <div class="subtotal">
                            ${type.price * current[0].num}元
                        </div>
                        <div class="operate">
                            <a href="#" class="remove" data-id="${elm.id}">&times;</a>
                        </div>
                    </div>
                `;

                $('.con-content').html(con);

            });

            let num = 0;

            if (shop.map(el => el.id).length) {
                num = shop.map(el => el.id).length;
            } else {
                num = 0;
            }

            $('.num>:nth-child(1)').html(num);

            $('.remove').on('click', function () {
                let res = shop.filter(el => el.id != $(this).attr('data-id'));
                cookie.set('shop', JSON.stringify(res), 1);
                location.reload();
            });

            $('.glyphicon-minus').on('click', function () {
                let res = $(this).attr('data-id');
                let shop = cookie.get('shop');
                shop = JSON.parse(shop);
                let _index = shop.findIndex(elm => elm.id == res);
                let count = parseInt(shop[_index].num);
                let oldcount = count;
                count -= 1;
                if (count == 0) {
                    // alert('修改数量不能小于0');
                    count = 1;
                    $('.shopjump').show();
                    $('.less').css('display', 'block');
                }
                shop[_index].num = count;
                cookie.set('shop', JSON.stringify(shop), 1);
                if (oldcount != count) location.reload();
            })

            $('.glyphicon-plus').on('click', function () {
                let res = $(this).attr('data-id');
                let shop = cookie.get('shop');
                shop = JSON.parse(shop);
                let _index = shop.findIndex(elm => elm.id == res);
                let count = parseInt(shop[_index].num);
                let oldcount = count;
                count += 1;
                if (count == 6) {
                    // alert('商品加入购物车数量超过限购数');
                    count = 5;
                    $('.shopjump').show();
                    $('.more').css('display', 'block');
                }
                shop[_index].num = count;
                cookie.set('shop', JSON.stringify(shop), 1);
                if (oldcount != count) location.reload();
            })

            $('.shopjump>div>div>a').on('click', function () {
                $('.shopjump').hide();
                $(this).parent().parent().css('display', 'none');
            })

            $('.select>span').on('click', function () {
                let res = $(this).attr('data-id');
                let length = $('.select').find('.active').length;
                let lengthAll = $('.select').children().length;

                if (res == 0) {
                    if (length != lengthAll) {
                        $(this).addClass('active');
                        $('.select-c>span').each(elm => {
                            $('.select-c>span').eq(elm).addClass('active');
                        })
                    } else {
                        $(this).removeClass('active');
                        $('.select-c>span').each(elm => {
                            $('.select-c>span').eq(elm).removeClass('active');
                        })
                    }

                } else {
                    if (!$(this).hasClass('active')) {
                        $(this).addClass('active');
                    } else {
                        $(this).removeClass('active');
                    }
                }
                $('.num>:nth-child(2)').html(`${$('.select-c').find('.active').length}`);

                let sum = 0;

                $('.select-c>span').parent().find('.active').each(elm => {
                    let el = $('.select-c>span').parent().find('.active').eq(elm);

                    sum += parseInt($(el).parent().siblings('.subtotal').text());
                })

                $('.sum>span').html(sum);
            })



        }
    });
}

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