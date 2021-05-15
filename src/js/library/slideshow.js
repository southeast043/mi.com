import { $ } from "./jquery.js"

// 轮播图
let slideshow = $(function () {
    let timmer;
    let left = $('.left-btn');
    let right = $('.right-btn');
    let imgs = $('.slideshow-inner>img');
    let indicators = $('.slideshow-indicators>li');
    let index;

    function findIndex() {
        imgs.each(elm => {
            if (imgs.eq(elm).hasClass('show')) {
                return index = elm;
            }
        })
    }

    function change() {
        imgs.eq(index).addClass('show').siblings().removeClass('show');
        indicators.eq(index).addClass('active').siblings().removeClass('active');
    }

    function next() {
        findIndex();
        index++;
        if (index >= 5) index = 0;
        change();
    }

    function last() {
        findIndex();
        index--;
        if (index < 0) index = 4;
        change();
    }

    timmer = setInterval(function () {
        next();
    }, 2000)

    left.on('click', function () {
        last();
    })

    right.on('click', function () {
        next();
    })

    indicators.on('click', function () {
        index = $(this).index();
        change();
    })

    imgs.on('mouseover', function () {
        clearInterval(timmer);
    })

    imgs.on('mouseout', function () {
        timmer = setInterval(function () {
            next();
        }, 2000)
    })

    $('.slideshow-controls').on('mouseover', function () {
        clearInterval(timmer);
    })

    $('.slideshow-controls').on('mouseout', function () {
        timmer = setInterval(function () {
            next();
        }, 2000)
    })

})

export { slideshow };