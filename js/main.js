$(document).ready(function() {

  // var goTop = $('<div class="go-top">Voltar ao topo</div>');
  // $('body').append(goTop);
  // $(window).scroll(function() {
  //   if ($(this).scrollTop() != 0) {
  //     goTop.fadeIn();
  //   } else {
  //     goTop.fadeOut();
  //   }
  // });
  // goTop.click(function() {
  //   $('body,html').animate({
  //     scrollTop : 0
  //   }, 800);
  // });

$('#fullpage').fullpage({
  verticalCentered: false,
  css3: true,
  scrollingSpeed: 700
//    slidesNavigation: true
});

var target = {
  'index': 'index.php',
  'empresa': 'empresa.php',
  'propolis': 'propolis.php',
  'producao': 'producao.php',
  'eventos': 'eventos.php',
  'contato': 'contato.php'
};
var pageName = 'index';
var address = window.location.href.split('/');
$.each(address, function(key, item) {
  if (item.indexOf("php") != -1) {
    pageName = item.split('.')[0];
  }
});
$('a[href^="' + target[pageName] + '"]').parent().addClass("active");

$(".nav a").on("click", function(){
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
});

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
},  5000);

// $('a[href^="#home"]').on('click',function (e) {
//   e.preventDefault();

//   var target = this.hash,
//   $target = $(target);

//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//   }, 900, 'swing', function () {
//     window.location.hash = target;
//   });
// });


// $('a[href^="#instituto"]').on('click',function (e) {
//   e.preventDefault();

//   var target = this.hash,
//   $target = $(target);

//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//   }, 900, 'swing', function () {
//     window.location.hash = target;
//   });
// });

// $('a[href^="#especialidades"]').on('click',function (e) {
//   e.preventDefault();

//   var target = this.hash,
//   $target = $(target);

//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//   }, 900, 'swing', function () {
//     window.location.hash = target;
//   });
// });

// $('a[href^="#profissionais"]').on('click',function (e) {
//   e.preventDefault();

//   var target = this.hash,
//   $target = $(target);

//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//   }, 900, 'swing', function () {
//     window.location.hash = target;
//   });
// });

// $('a[href^="#parceiros"]').on('click',function (e) {
//   e.preventDefault();

//   var target = this.hash,
//   $target = $(target);

//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//   }, 900, 'swing', function () {
//     window.location.hash = target;
//   });
// });

// $('a[href^="#contato"]').on('click',function (e) {
//   e.preventDefault();

//   var target = this.hash,
//   $target = $(target);

//   $('html, body').stop().animate({
//     'scrollTop': $target.offset().top
//   }, 900, 'swing', function () {
//     window.location.hash = target;
//   });
// });


});