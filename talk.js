$(function() {
    $('#yes').click(function(event) {
        modal('欢迎小姐姐来观赏为你唯一准备的烟火表演。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('鉴于对你的了解，你很调皮', A);
    });
});

function A() {
    modal('肯定会选这个', B);
}

function B() {
    modal('这场烟火表演只为你准备', C);
}

function C() {
    modal('所以', D);
}

function D() {
    modal('能知道的就只有你', E);
}

function E() {
    modal('废话不多说', F);
}

function F() {
    modal('请好好欣赏这为你准备的表演', G);
}

function G() {
    modal('希望你每天的心情', H);
}

function H() {
    modal('都能像这烟火一样美丽', I);
}

function I() {
    modal('笑容能一直', J)
}

function J() {
    modal('在你身上永不消失', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
