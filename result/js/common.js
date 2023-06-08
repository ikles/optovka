jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
  });


  $(".top-mnu").click(function (e) {
    e.stopPropagation();
  });




  $('.events__photos').slick({
    infinite: true,    
    speed: 400,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 3,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    pauseOnHover: true,  
  });




/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
  e.preventDefault();  
  $('body').toggleClass('active');
  let pg = parseInt(document.location.pathname.match(/\d+/));
  $('body.active').css('background-image', "url('../img/"+pg+".jpg')");
  $('body:not(.active)').css('background-image', "unset");

});*/

/************************************/


  $('.wholesale__gal-item').fancybox({
    arrows: true,
    infobar: true,
    smallBtn: true,
    toolbar: true,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });

  $('.events__photos a').fancybox({
    arrows: true,
    infobar: true,
    smallBtn: true,
    toolbar: true,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });



  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  
  popup('.hero__btn', '.modal-overlay_1', '.modal-close_1');
  popup('.header__city', '.modal-overlay_1', '.modal-close_1');


  $('#where_search').on('input', function() { 
    $('.filter-where-list').show();
    $('.cityform__list').hide();
    //$('.input-where-delete').show();
  });

/*  $('.filter-input.persons').on('focus', function () {
    $('.filter-persons-control-wrap').fadeIn();
  });

  $('.input-where-delete').click(function () {
    $('#where_search').val('');
  });*/

  

  $('#where_search').hideseek({
    hidden_mode: true,
    nodata: 'Пока ничего не найдено...'
  });


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 0}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
     $('.serv-arr-up').hide();
   }
 });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }

  function showHide(elem) {
    let block = $(elem);    
    var button = block.find('.toggle');
    button.html(button.data('text'));
    button.click(function(e){
      e.preventDefault();      
      let desc = $(this).prev();      
      desc.toggleClass('more');
      var swap = $(this).data('swap');
      var text = $(this).data('text');
      $(this).data('text', swap);
      $(this).data('swap', text);
      $(this).html(swap);
    });
  }


  showHide('.type');



  $('.accordion-content').first().slideDown().toggleClass('open-content');
  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).next().slideToggle().toggleClass('open-content');
  });

}); //ready


//const dropzone = new Dropzone("div.my-dropzone", { url: "/file/post" });
