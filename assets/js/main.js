(function ($) {

    "use strict";

    $(window).on('load', function () {

        /*Page Loader active
          ========================================================*/
        $('#preloader').fadeOut();

        // Sticky Nav
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 200) {
                $('.scrolling-navbar').addClass('top-nav-collapse');
            } else {
                $('.scrolling-navbar').removeClass('top-nav-collapse');
            }
        });

        /* ==========================================================================
           countdown timer
           ========================================================================== */
        jQuery('#clock').countdown('2020/10/24', function (event) {
            jQuery(this).html(event.strftime(''
                + '<div class="time-entry days"><span>%-D</span> Days</div> '
                + '<div class="time-entry hours"><span>%H</span> Hours</div> '
                + '<div class="time-entry minutes"><span>%M</span> Minutes</div> '
                + '<div class="time-entry seconds"><span>%S</span> Seconds</div> '));
        });

        /* slicknav mobile menu active  */
        $('.mobile-menu').slicknav({
            prependTo: '.navbar-header',
            parentTag: 'liner',
            allowParentLinks: true,
            duplicate: true,
            label: '',
        });

        /* WOW Scroll Spy
      ========================================================*/
        let wow = new WOW({
            //disabled for mobile
            mobile: false
        });
        wow.init();

        /* Nivo Lightbox
        ========================================================*/
        $('.lightbox').nivoLightbox({
            effect: 'fadeScale',
            keyboardNav: true,
        });

        // one page navigation
        $('.navbar-nav').onePageNav({
            currentClass: 'active'
        });

        /* Back Top Link active
        ========================================================*/
        let offset = 200;
        $(window).scroll(function () {
            if ($(this).scrollTop() > offset) {
                $('.back-to-top').fadeIn(400);
            } else {
                $('.back-to-top').fadeOut(400);
            }
        });

        $('.page-scroll').on('click', () => {
            const $slicknavBtn = $('.slicknav_btn.slicknav_open');
            $slicknavBtn.click()
        });

        if ($(window).width() < 992) {
            console.log("isn't large");
            $('html').css("scroll-behavior", 'smooth');
        }

        $('.back-to-top').on('click', function (event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 600);
            return false;
        });

    });

}(jQuery));
