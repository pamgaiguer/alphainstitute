$(document).ready(function(){

var gallery = '';

var galleryImages = [
{
  'nameImage' : 'Ambiente Superior',
  'imgPath': '../images/instituto/escritorio001.jpg'
},
{
  'nameImage' : 'Sala 1',
  'imgPath': '../images/instituto/escritorio002.jpg'
},
{
  'nameImage' : 'Sala 2',
  'imgPath': '../images/instituto/escritorio003.jpg'
},
{
  'nameImage' : 'Sala 3',
  'imgPath': '../images/instituto/escritorio004.jpg'
},
{
  'nameImage' : 'Sala 4',
  'imgPath': '../images/instituto/escritorio005.jpg'
},
{
  'nameImage' : 'Exame 1',
  'imgPath': '../images/instituto/escritorio006.jpg'
},
{
  'nameImage' : 'Auditorio',
  'imgPath': '../images/instituto/escritorio007.jpg'
},
{
  'nameImage' : 'Exame 2',
  'imgPath': '../images/instituto/escritorio008.jpg'
},
{
  'nameImage' : 'Terapia',
  'imgPath': '../images/instituto/escritorio009.jpg'
},
{
  'nameImage' : 'Sala 5',
  'imgPath': '../images/instituto/escritorio010.jpg'
},
{
  'nameImage' : 'Consultorio',
  'imgPath': '../images/instituto/escritorio011.jpg'
},
{
  'nameImage' : 'Entrada Alpha Group',
  'imgPath': '../images/instituto/escritorio012.jpg'
},
{
  'nameImage' : 'Sala 6',
  'imgPath': '../images/instituto/escritorio013.jpg'
},
{
  'nameImage' : 'Sala 7',
  'imgPath': '../images/instituto/escritorio014.jpg'
},
{
  'nameImage' : 'Consultorio',
  'imgPath': '../images/instituto/escritorio015.jpg'
},
{
  'nameImage' : 'Sala de Espera',
  'imgPath': '../images/instituto/escritorio016.jpg'
},
{
  'nameImage' : 'Consultorio',
  'imgPath': '../images/instituto/escritorio017.jpg'
},
{
  'nameImage' : 'Consultorio',
  'imgPath': '../images/instituto/escritorio018.jpg'
},
{
  'nameImage' : 'Recepção',
  'imgPath': '../images/instituto/escritorio019.jpg'
},
{
  'nameImage' : 'Recepção',
  'imgPath': '../images/instituto/escritorio020.jpg'
},
{
  'nameImage' : 'Consultorio',
  'imgPath': '../images/instituto/escritorio021.jpg'
},
{
  'nameImage' : 'Sala de Espera',
  'imgPath': '../images/instituto/escritorio022.jpg'
},
{
  'nameImage' : 'Decoração',
  'imgPath': '../images/instituto/escritorio023.jpg'
},

];


$.each(galleryImages, function(k, e){

    if( k % 2 == 0 ){
      gallery += "<div class= 'row'>";
    }

  gallery += "<div class='col-md-3 col-sm-3'>\
        <div class='pic wow flipInX showdelay2'>\
          <a href='"+ e.imgPath +"' class='gallery-item'>\
          <img class='img-responsive img-thumbnail' src='" + e.imgPath + "' alt='"+ e.nameImage +"'>\
          <div class='img_overlay'></div></a>\
        </div>\
      </div>";

   if( k == 3 || k == 7 || k == 11 || k == 15 || k == 19 ){
      gallery += "</div>";
    }
});

$(".container-gallery").append(gallery);


});