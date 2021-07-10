$('#banner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    
    dots:true,
    autoplaySpeed: 3000,
    prevArrow:'<i class="fas fa-long-arrow-alt-left arrow"></i>',
    nextArrow:'<i class="fas fa-long-arrow-alt-right arrow"></i>',
    dotsClass:'item_dots'
    
  });
  $('.number_counter').counterUp({
    delay: 5,
    time: 500
});
  var filterizd = $('.filtr-container').filterizr();
  
  $(".work_filter ul li").on('click',function(){
  $(".work_filter ul li").removeClass('active');
  $(this).addClass('active');
    });

  $('#bar1').barfiller();
  $('#bar2').barfiller();
  $('#bar3').barfiller();
  $('#bar4').barfiller();
  $('.team_img_info').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: true,
		autoplay: true,
  		autoplaySpeed: 1000,
  		prevArrow:'<i class="fas fa-long-arrow-alt-left arrow"></i>',
    nextArrow:'<i class="fas fa-long-arrow-alt-right arrow"></i>',
  		
  		asNavFor : '.team_slide_info',
  		centerMode: true,
  		centerPadding: '0px;',
	});

		$('.team_slide_info').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: false,
		arrows: false,
		autoplay: true,
  		autoplaySpeed: 1000,
  		asNavFor : '.team_img_info'
	});

  



  





    
 