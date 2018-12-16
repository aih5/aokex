/* -----------------------------------------------------------------------------


File:           JS Core
Version:        1.0
Last change:    00/00/00 
Author:         Suelo

-------------------------------------------------------------------------------- */
(function () {

	"use strict";

	var landy = {
		init: function () {
			this.Basic.init();
		},

		Basic: {
			init: function () {

				this.preloader();
				this.menuBar();
				this.videoPopup();
				this.showcaseSlide();
				this.gotop();
                this.showModal();
            },
            // 显示模态框
            showModal: function () {
                if (config.openAd) {
                    jQuery('#modal').modal('show');
                    jQuery('#jizan').click(function() {
                        window.open(config.url);
                        jQuery('#modal').modal('hide');
                    })
                }
            },
			/* Start Of Preloader
			================================================*/
			preloader: function () {

				$(window).on('load', function () {
					$('#preloader').fadeOut('slow', function () { $(this).remove(); });
				});
			},
			/* Start Of Preloader
			================================================*/



			/* - Start of menu bar
			================================================*/
			menuBar: function () {
				jQuery(window).on('scroll', function () {
					if (jQuery(window).scrollTop() > 100) {
						jQuery('.main-menu-container').addClass('menu-bg-overlay')
					} else {
						jQuery('.main-menu-container').removeClass('menu-bg-overlay')
					}
				})

				$(function () {
					$('.navbar-nav a').on("click", function () {
						if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
							var target = $(this.hash);
							target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
							if (target.length) {
								$('html, body').animate({
									scrollTop: target.offset().top - 65
								}, 1000);
								return false;
							}
						}
					});

					$(".navbar-nav a").on("click", function () {
						$(".navbar-nav a").removeClass("active");
						// $(".tab").addClass("active"); // instead of this do the below 
						$(this).addClass("active");
					});
				});
			},


			/* - End of menu bar
			================================================*/



			/* Start of Video popup
			================================================*/
			videoPopup: function () {
				$('.popup-with-zoom-anim').magnificPopup({
					disableOn: 200,
					type: 'iframe',
					mainClass: 'mfp-fade',
					removalDelay: 160,
					preloader: false,
					fixedContentPos: false
				});

				$(window).on('load', function () {

					$('.banner-slide-area').owlCarousel({
						loop: true,
						margin: 0,
						items: 1,
						nav: false,
						autoplay: false,
						smartSpeed: 1500,
					})
				});

			},

			/* - End Of Video popup
			================================================*/




			/* - Start of showcase slide
			================================================*/
			showcaseSlide: function () {
				$('.showcase-slider').owlCarousel({
					margin: 15,
					responsiveClass: true,
					pagination: true,
					nav: true,
					navText: ['<span class="ti-angle-left"></span>',
						'<span class="ti-angle-right"></span>'],
					autoplay: false,
					smartSpeed: 1000,
					responsive: {
						0: {
							items: 1,
							pagination: true,
						},
						400: {
							items: 2,
							pagination: true,
						},
						500: {
							items: 2,
							pagination: true,
						},
						600: {
							items: 2,
							pagination: true,
						},
						700: {
							items: 3,
							pagination: true,
						},
						1000: {
							items: 4,
							pagination: true,

						}
					},
				})
			},
			/* - End of showcase slide
			================================================*/

			// 判断pc
			isPc: function() {
				return navigator.userAgent.indexOf('Windows') > -1;
			},
			// 返回顶部
			gotop: function() {
                var self = this;
                if(self.isPc()) {
                    jQuery('.qrcode').show()
                    jQuery(window).on('scroll', function () {
                        if (jQuery(window).scrollTop() > 400) {
                            jQuery('.anchor').show()
                        } else {
                            jQuery('.anchor').hide()
                        }
                    })
                    jQuery('.anchor').on('click', function() {
                        jQuery(window).scrollTop(0);
                    })
                }
                if (config.openAd) {
                    jQuery('.zan').show().on('click', function() {
                        jQuery('#modal').modal('show');
                    });
                    setInterval(function() {
                        jQuery('#zan').removeClass().addClass('tada animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                            jQuery(this).removeClass();
                        });
                    }, 5000)
                }
            }
		}
	}
	$(document).ready(function () {
		landy.init();
	});

})();