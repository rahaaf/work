/* global $, alert , console */

$(function () {
	
   'use strict';

    $('html').niceScroll();


    $('.header').height($(window).height());

    $('.arrow i').click(function() {
        $('html, body').animate({
            scrollTop: $('.featuers').offset().top 
        },500);

        });
        
        //show more
        $('.show-more').click(function() {

            $('.our-work .hidden').fadeIn(1000);
        });
       
        var leftArrow =$('.testim .fa-chevron-left'),
            rightArrow =$('.testim .fa-chevron-right');

            function checkClints(){
                $('.clint:first').hasClass('active')? leftArrow.fadeOut() : leftArrow.fadeIn();
                $('.clint:last').hasClass('active')? rightArrow.fadeOut() : rightArrow.fadeIn();
            }
            checkClints();

            $('.testim i').click(function(){

                if($(this).hasClass('fa-chevron-right')){

                    $('.testim .active').fadeOut(100,function(){

                        $(this).removeClass('active').next('.clint').addClass('active').fadeIn();

                        checkClints();
                    });

                }else {

                    $('.testim .active').fadeOut(100,function(){

                        $(this).removeClass('active').prev('.clint').addClass('active').fadeIn();

                        checkClints();
                    });
                }
            });
});