/* -----------------------------------------------------------------------------

File:           JS Core
Version:        1.0
Last change:    2018/7/05 
Author:         msg

-------------------------------------------------------------------------------- */
import '../css/iconfont.css';
import '../css/themify-icons.css';
import '../css/animate.css';
import '../css/owl.carousel.css';
// import '../css/video.min.css';
import '../css/menu.css';
import '../css/style.css';
import '../css/responsive.css';

// 引入bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import './owl.carousel.min.js';
// import './jquery.magnific-popup.min.js';


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
				alert(1)
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
			jQuery(window).on('scroll', function () {
				if (jQuery(window).scrollTop() > 400 && self.isPc()) {
					jQuery('.gotop').show()
				} else {
					jQuery('.gotop').hide()
				}
			})
			jQuery('.gotop').on('click', function() {
				jQuery(window).scrollTop(0);
			})
		}
	}
}
$(document).ready(function () {
	landy.init();
});


