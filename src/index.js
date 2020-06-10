// $(document).mouseup(function(e) {
//   // событие клика по веб-документу
//   let input = $("#loopa-input"); // тут указываем ID элемента
//   if (
//     !input.is(e.target) && // если клик был не по нашему блоку
//     input.has(e.target).length === 0
//   ) {
//     // и не по его дочерним элементам
//     input.hide(); // скрываем его
//   }
// });
// document.getElementById("loopa").onclick = function() {
//   let el = document.getElementById("loopa-input");
//   el.style.display === "none"
//     ? (el.style.display = "initial")
//     : (el.style.display = "none");
// };
// $(".owl-carousel").owlCarousel({
//   loop: true,
//   items: 1,
// });

jQuery(document).ready(function($) {
  /*---------------------Filter-------------------------*/
  let btns = $(".tabs__btn");
  btns.on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    let cards = $(".tabs__card");
    cards.removeClass("active");
    let btnText = $(this)
      .text()
      .toLowerCase();
    let final = cards.filter(function() {
      if (btnText === "all") {
        return cards;
      } else {
        return $(this).data("category") === btnText;
      }
    });
    final.each(function() {
      $(this).addClass("active");
    });
  });
  /*---------------------Loop-------------------------*/
  $(".fa-search").click(function() {
    $(".container, .input").toggleClass("active");
    $(".input").focus();
  });
});
