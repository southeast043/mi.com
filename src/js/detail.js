import { $ } from "../js/library/jquery.js";
import { header } from "../js/library/header.js";
import { footer } from "../js/library/footer.js";
import cookie from './library/cookie.js';

let id = location.search.split('=')[1];

$.ajax({
    type: "get",
    url: "../../interface/getItem.php",
    data: {
        id: id
    },
    dataType: "json",
    success: function (res) {
        let detailpicture = JSON.parse(res.detailpicture);
        let slideshow = JSON.parse(res.slideshow);
        let type = JSON.parse(res.type);

        let title = `
            <h2>${res.title}</h2>
            <a href="#">用户评价</a>
        `;

        $('.title-c').html(title)

        let contentLeft = '';

        slideshow.forEach((elm, i) => {
            contentLeft += `
            <div class="item">
                <img src="../${elm.src}" alt="...">
            </div>
            `;
        })

        $('.carousel-inner').html(contentLeft);
        $('.carousel-inner>:nth-child(1)').addClass('active');

        let del = '';

        if (type[0].oldprice) {
            del = `<del>${type[0].oldprice}元</del>`;
        }

        let contentRight = `
        <h2>${res.title}</h2>
        <p>${res.detail}</p>
        <p>小米自营</p>
        <p>
            <span>${type[0].price}元</span>
            ${del}
        </p>
        <div class="clr">
            <span class="iconfont icon-Frame1"></span>
            <div>
                <p>
                    <span>北京</span>
                    <span>北京市</span>
                    <span>海淀区</span>
                    <span>清河街道</span>
                    <a href="#">修改</a>
                </p>
                <p>有现货</p>
            </div>
        </div>
        <h3>选择颜色</h3>
        <div>${type[0].color}</div>
        <h3>选择尺寸</h3>
        <div>${type[0].size}</div>
        <div>
            <div class="clr">
                <span class="fl">${res.title}</span>
                <del class="fr">${type[0].oldprice}元</del>
                <span class="fr">${type[0].price}元</span>
            </div>
            <h2>总计：${type[0].price}元</h2>
        </div>
        <div class="clr">
            <div class="fl addItem"><a href="./shoppingCart.html">加入购物车</a></div>
            <div class="fl"><a href="#"> <span class="glyphicon glyphicon-heart-empty"></span>喜欢</a></div>
        </div>
        <div>
            <span>
                <a href="#">
                    <span class="glyphicon glyphicon-ok-circle"></span>小米自营
                </a>
            </span>
            <span>
                <a href="#">
                    <span class="glyphicon glyphicon-ok-circle"></span>小米发货
                </a>
            </span>
            <span>
                <a href="#">
                    <span class="glyphicon glyphicon-ok-circle"></span>7天无理由退货
                </a>
            </span>
            <span>
                <a href="#">
                    <span class="glyphicon glyphicon-ok-circle"></span>运费说明
                </a>
            </span>
            <span>
                <a href="#">
                    <span class="glyphicon glyphicon-ok-circle"></span>企业信息
                </a>
            </span>
            <br>
            <span>
                <a href="#">
                    <span class="glyphicon glyphicon-ok-circle"></span>售后服务政策
                </a>
            </span>
            <span>
                <a href="#">
                    <span class="glyphicon glyphicon-ok-circle"></span>7天价格保护
                </a>
            </span>
            </div>

        `;

        $('.content-right').html(contentRight);

        $('.addItem>a').on('click', function () {
            addItem(res.id, res.price, 1);
        });

        let detail = '';

        detailpicture.forEach((elm, i) => {
            detail += `<img src="../${elm.src}" alt="">`;
        })

        $('.detail').prepend(detail);
    }
});


function addItem(id, price, num) {
    let shop = cookie.get('shop');

    let product = {
        id,
        price,
        num
    }

    // 判断当前cookie中是否有购物数据
    if (shop) { // 如果有数据 取出是一个字符串
        shop = JSON.parse(shop);

        // 添加之前先要判断数据中有没有该商品
        if (shop.some(el => el.id === id)) {
            let _index = shop.findIndex(elm => elm.id == id);
            let count = parseInt(shop[_index].num);
            count += parseInt(num);
            shop[_index].num = count;
        } else {
            shop.push(product);
        }


    } else { // 第一次没有数据的情况 创建一个新数据
        shop = [];
        shop.push(product);
    }

    cookie.set('shop', JSON.stringify(shop), 1);
}

$(function () {

    // 头部
    header;

    // 底部
    footer;
})