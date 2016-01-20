$(document).ready(function(){

  var gallery = '';

  var galleryImages = [
  {
    'photoId': '12',
    'nameImage' : 'Bem-vindo ao Alpha Group',
    'imgPath': '../images/instituto/escritorio012.jpg'
  },
  {
    'photoId': '19',
    'nameImage' : 'Recepção',
    'imgPath': '../images/instituto/escritorio019.jpg'
  },
  {
    'photoId': '20',
    'nameImage' : 'Recepção',
    'imgPath': '../images/instituto/escritorio020.jpg'
  },
  {
    'photoId': '22',
    'nameImage' : 'Parceiros - Alta Excelência Diagnóstica',
    'imgPath': '../images/instituto/escritorio022.jpg'
  },
  {
    'photoId': '16',
    'nameImage' : 'Sala de Espera',
    'imgPath': '../images/instituto/escritorio016.jpg'
  },
  {
    'photoId': '17',
    'nameImage' : 'Consultório Dra. Maria Em&iacute;lia Gadelha Serra',
    'imgPath': '../images/instituto/escritorio017.jpg'
  },
  {
    'photoId': '18',
    'nameImage' : 'Consultório Dra. Maria Em&iacute;lia Gadelha Serra',
    'imgPath': '../images/instituto/escritorio018.jpg'
  },
  {
    'photoId': '14',
    'nameImage' : '.',
    'imgPath': '../images/instituto/escritorio014.jpg'
  },
  {
    'photoId': '13',
    'nameImage' : 'Procedimento 1',
    'imgPath': '../images/instituto/escritorio013.jpg'
  },
  {
    'photoId': '23',
    'nameImage' : '.',
    'imgPath': '../images/instituto/escritorio023.jpg'
  },
  {
    'photoId': '15',
    'nameImage' : 'Consultório 1 - Instituto Machado',
    'imgPath': '../images/instituto/escritorio015.jpg'
  },
  {
    'photoId': '7',
    'nameImage' : 'Audit&oacute;rio "O c&eacute;u n&atilde;o &eacute; o limite"',
    'imgPath': '../images/instituto/escritorio007.jpg'
  },
  {
    'photoId': '8',
    'nameImage' : 'Banhos Terapêuticos',
    'imgPath': '../images/instituto/escritorio008.jpg'
  },
  {
    'photoId': '9',
    'nameImage' : 'Relax',
    'imgPath': '../images/instituto/escritorio009.jpg'
  },
  {
    'photoId': '10',
    'nameImage' : 'SPA',
    'imgPath': '../images/instituto/escritorio010.jpg'
  },
  {
    'photoId': '1',
    'nameImage' : '.',
    'imgPath': '../images/instituto/escritorio001.jpg'
  },
  {
    'photoId': '2',
    'nameImage' : 'Consultório 4',
    'imgPath': '../images/instituto/escritorio002.jpg'
  },
  {
    'photoId': '4',
    'nameImage' : 'Consultório 5',
    'imgPath': '../images/instituto/escritorio004.jpg'
  },
  {
    'photoId': '3',
    'nameImage' : 'Consultório 6',
    'imgPath': '../images/instituto/escritorio003.jpg'
  },

  {
    'photoId': '5',
    'nameImage' : 'Consultório 7',
    'imgPath': '../images/instituto/escritorio005.jpg'
  },
  {
    'photoId': '6',
    'nameImage' : 'Ultrassom',
    'imgPath': '../images/instituto/escritorio006.jpg'
  },
  {
    'photoId': '21',
    'nameImage' : 'Consultório 8',
    'imgPath': '../images/instituto/escritorio021.jpg'
  },
  {
    'photoId': '11',
    'nameImage' : 'Consultório 10',
    'imgPath': '../images/instituto/escritorio011.jpg'
  },
  ];


  $.each(galleryImages, function(k, e){

    if( k == 0 || k == 4 || k == 8 || k == 12 || k == 16 || k == 20){
      gallery += "<div class= 'row'>";
    }

    gallery += "<div class='col-md-3 col-sm-3'>\
    <div class='pic wow flipInX showdelay2'>\
    <a href='"+ e.imgPath +"' class='instituto-item' title='"+ e.nameImage +"'><img class='img-thumbnail' src='" + e.imgPath + "' alt='"+ e.nameImage +"'><div class='img_overlay'></div></a>\
    </div>\
    <p class='text-center'>"+ e.nameImage +"</p>\
    </div>";

    if( k == 3 || k == 7 || k == 11 || k == 15 || k == 19 ){
      gallery += "</div>";
    }
  });

  $(".container-gallery").append(gallery);

  $('.instituto-item').magnificPopup({
    type: 'image',
    gallery:{
      enabled:true
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function(item) {
        return item.el.attr('title') + '<small>por Leonardo Zaccur</small>';
      }
    }
  });

});