$(document).ready(function() {

  var goTop = $('<div class="go-top">Voltar ao topo</div>');
  $('body').append(goTop);
  $(window).scroll(function() {
    if ($(this).scrollTop() != 0) {
      goTop.fadeIn();
    } else {
      goTop.fadeOut();
    }
  });
  goTop.click(function() {
    $('body,html').animate({
      scrollTop : 0
    }, 800);
  });

  $('#fullpage').fullpage({
    verticalCentered: false,
    css3: true,
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

  $('.carousel').carousel({
    interval: 7000,
    pause: "false"
  });


//link para home
$('a[href^="#home"]').on('click',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});


//link para instituto
$('a[href^="#instituto"]').on('click',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});

//link para especialidades
$('a[href^="#especialidades"]').on('click',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});

//link para profissionais
$('a[href^="#profissionais"]').on('click',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});

//link para parceiros
$('a[href^="#parceiros"]').on('click',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});

//link para contato
$('a[href^="#contato"]').on('click',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
    'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
    window.location.hash = target;
  });
});


});