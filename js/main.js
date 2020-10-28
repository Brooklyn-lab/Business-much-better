jQuery(document).ready(function () {

    // //-------------footer-date------------------------
    // let date = new Date().getFullYear();
    // $("#date").text(new Date().getFullYear());

    // // Filter
    // let invisible = $(".filter_invisible");
    // let more = $(".filter__more");
    // let btns = $(".tabs__btn");

    // //-------------------Кнопка "More"------------------
    // invisible.hide();

    // more.on("click", function () {
    //     invisible.toggle();
    // });

    // //--------------------Категории---------------------
    // btns.on("click", function () {
    //     $(this)
    //         .addClass("active")
    //         .siblings()
    //         .removeClass("active");
    //     let cards = $(".tabs__card");
    //     cards.removeClass("active");
    //     let btnText = $(this)
    //         .text()
    //         .toLowerCase();
    //     let final = cards.filter(function () {
    //         if (btnText === "all") {
    //             return cards;
    //         } else {
    //             return $(this).data("category") === btnText;
    //         }
    //     });
    //     final.each(function () {
    //         $(this).addClass("active");
    //     });
    // });

    // let blogBtn = $('#blog-btn');
    // let postInvisibile = $('.post__link_invisible');
    // let recentPosts = $('.recent-posts__items');
    // let tags = $('.tags__body');
    // let instagram = $('.instagram__body');
    // let recentPostsWrapper = $('.recent-posts__wrapper');
    // let tagsWrapper = $('.tags__wrapper');
    // let instaWrapper = $('.instagram__wrapper');

    // $('.sidebar-title::before').css('display: none');

    // postInvisibile.hide();
    // recentPosts.show();
    // tags.show();
    // instagram.show();

    // blogBtn.on("click", function () {
    //     postInvisibile.toggle();
    // });

    // recentPostsWrapper.on("click", function () {
    //     recentPosts.toggle();
    //     recentPostsWrapper.toggleClass('posts__wrapper_active ');
    // });

    // tagsWrapper.on("click", function () {
    //     tags.toggle();
    //     tagsWrapper.toggleClass('posts__wrapper_active ');
    // });

    // instaWrapper.on("click", function () {
    //     instagram.toggle();
    //     instaWrapper.toggleClass('posts__wrapper_active ');
    // });


    // let a = 10;
    // let b = 2;
    // console.log(a+b);
    // console.log(a*b);
    // console.log(a/b);
    // console.log(a-b);

    // let c = 15;
    // let d = 2;
    // let result = c + d;
    // console.log(result);

    // console.log(a + b + c);

    // let a = 17;
    // let b = 10;

    // let c = a - b;
    // let d = 7;
    // let result = c + d;

    // console.log(result);

    // let name = 'Илья';
    // console.log('Привет, ' + name + '!');

    // let name = prompt('Как тебя зовут?');
    // alert(`Твое имя - ${name}!`);

    // let num = prompt('Загадай число и запиши его.');
    // alert(`Квадрат твоего числа - ${num ** 2}.`);

    // let num = '12345';
    // console.log(num[0] * num[1] * num[2] * num[3] * num[4]);

    // let hour = 60 * 60;
    // console.log('В часе:' + hour + ' секунд.');

    // let day = 60 * 60 * 24;
    // console.log('В сутках:' + day + ' секунд.');

    // let month = 60 * 60 * 24 * 31;
    // console.log('В месяце:' + month + ' секунд.');

    // let hour1 = 10;
    // let min = 54;
    // let second = 30;
    // console.log(hour1 + ':' + min + ':' + second);

    // var num = 47;
    // num += 7;
    // num -= 18;
    // num *= 10;
    // num /= 15;
    // alert(num);

    // arr = ['a', 'b', 'c'];
    // // alert(arr[])
    // console.log(arr[0]);
    // console.log(arr[1]);
    // console.log(arr[2]);

    // arr = ['a', 'b', 'c', 'd'];
    // console.log(arr[0] + '+' + arr[1] + ',' + arr[2] + '+' + arr[3]);

    // let arr = [2, 5, 3, 9];
    // let result = arr[0] * arr[1] + arr[2] * arr[3];
    // console.log(result);

    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // };

    // for (key in obj) {
    //    console.log(obj[key]);
    // }

    // for (key in obj) {
    //     console.log(key);
    // }

    // // console.log(obj['c']);
    // console.log(Object(obj)['c']);

    // let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
    // console.log(obj['js']['0']);

    // let test = true;

    // if(test != true) {
    //     console.log('Good');
    // } else {
    //     console.log('Not good');
    // }

    // let num = 1;
    // // for(i = 1; i <= 100; i++){
    // //     console.log(i);
    // // }
    // while(num <= 100) {
    //     num++;
    //     console.log(num);
    // }

    // let objWeek = {1: 'понедельник', 2: 'вторник', 3: 'среда', 4: 'четверг', 5: 'пятница', 6: 'суббота', 7: 'воскресение'};
    // let day = objWeek[3];

    // console.log (day);

    // for(i = 1; i <= 100; i += 2) {
    //     console.log(i);
    // }
    // let num = 0;
    // for(let i = 1; i <= 100; i++) {
    //     console.log(num += i);
    // }

    // // let i = 1;
    // // let num = 0;
    // // while (i <= 100) {
    // //     num += i;
    // //     i++;  
    // // }
    // console.log(num);

    // for (let i = 4; i <= 400; i++) {
    //     console.log(i);
    // }

    // let i = 3;
    // while (i < 400) {
    //     i++;
    //     console.log(i);
    // }
    // let num = 7;
    // for (let i = 1; i <= 9; i++ ) {
    //     console.log(num*i);
    // }

    // let obj = {'Коля':'200', 'Вася':'300', 'Петя':'400'};
    // for(key in obj) {
    //     console.log(key + ' - зарплата ' + obj[key] + ' долларов.');
    // }

    // let arr = [1, 2, 3, 4, 8];
    // for (let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    // }
    // let arr = [2, 5, 9, 15, 0, 4];
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] > 3 && arr[i] < 10) {
    //         console.log(arr[i]);
    //     }
    // }
    let arr = [2, 5, -9, 15, 0, -4];
    
});