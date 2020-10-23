jQuery(document).ready(function () {

    //-------------footer-date------------------------
    let date = new Date().getFullYear();
    $("#date").text(new Date().getFullYear());

    // Filter
    let invisible = $(".filter_invisible");
    let more = $(".filter__more");
    let btns = $(".tabs__btn");

    //-------------------Кнопка "More"------------------
    invisible.hide();

    more.on("click", function () {
        invisible.toggle();
    });

    //--------------------Категории---------------------
    btns.on("click", function () {
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
        let cards = $(".tabs__card");
        cards.removeClass("active");
        let btnText = $(this)
            .text()
            .toLowerCase();
        let final = cards.filter(function () {
            if (btnText === "all") {
                return cards;
            } else {
                return $(this).data("category") === btnText;
            }
        });
        final.each(function () {
            $(this).addClass("active");
        });
    });

    let blogBtn = $('#blog-btn');
    let postInvisibile = $('.post__link_invisible');
    let recentPosts = $('.recent-posts__items');
    let tags = $('.tags__body');
    let instagram = $('.instagram__body');
    let recentPostsWrapper = $('.recent-posts__wrapper');
    let tagsWrapper = $('.tags__wrapper');
    let instaWrapper = $('.instagram__wrapper');

    $('.sidebar-title::before').css('display: none');

    postInvisibile.hide();
    recentPosts.show();
    tags.show();
    instagram.show();

    blogBtn.on("click", function () {
        postInvisibile.toggle();
    });

    recentPostsWrapper.on("click", function () {
        recentPosts.toggle();
        recentPostsWrapper.toggleClass('posts__wrapper_active ');
    });

    tagsWrapper.on("click", function () {
        tags.toggle();
        tagsWrapper.toggleClass('posts__wrapper_active ');
    });

    instaWrapper.on("click", function () {
        instagram.toggle();
        instaWrapper.toggleClass('posts__wrapper_active ');
    });

});