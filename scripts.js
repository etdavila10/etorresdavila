// Changing the opacity of the navbar once scrolling gets further down
$(window).scroll(function() {
    let currently_active = $('.active');
    let window_top = $(window).scrollTop();
    let home_top = $('body').offset().top;
    let about_top = $('#about').offset().top - 100;
    let cv_top = $('#cv').offset().top - 100;
    let res_top = $('#research').offset().top - 100;
    let projs_top = $('#projects').offset().top - 100;
    let teach_top = $('#teaching').offset().top - 100;
    let hob_top = $('#hobbies').offset().top - 100;
    if (window_top >= 50) {
        $('#navbar').css('opacity', 0.95);
    } else {
        $('#navbar').css('opacity', 1);
    }
    currently_active.removeClass('active');
    if (window_top >= hob_top) {
        $('a[href="#hobbies"]').addClass('active');
    } else if(window_top >= teach_top) {
        $('a[href="#teaching"]').addClass('active');
    } else if(window_top >= projs_top) {
        $('a[href="#projects"]').addClass('active');
    } else if(window_top >= res_top) {
        $('a[href="#research"]').addClass('active');
    } else if(window_top >= cv_top) {
        $('a[href="#cv"]').addClass('active');
    } else if(window_top >= about_top) {
        $('a[href="#about"]').addClass('active');
    } else {
        $('a[href="#"]').addClass('active');
    }
});

// smooth scroll animation when navbar is clicked
$(".nav-link").click(function() {
    var pageId = $(this).text().toLowerCase();
    if (pageId == "home") {
        $('html, body').animate({
            scrollTop: ($('body').offset().top - 100)
        }, 800);
    } else {
        $('html, body').animate({
            scrollTop: $("#"+pageId).offset().top - 88
        }, 800);
    }
});
