$(document).ready(function(){
  var posTop = $('.menu').offset().top;
        $(window).scroll(function(){
                var top = $(document).scrollTop();
                if (top > posTop) {
                        $('.menu').addClass('floating');
                        $('.menu').removeClass('col-md-7');
                        $('.menu').removeClass('offset-md-2');
                } else {
                        $('.menu').addClass('offset-md-2');
                        $('.menu').addClass('col-md-7');
                        $('.menu').removeClass('floating');
                }
        });

        $('a.scroll').click(function (event) {
            event.preventDefault();
            var id  = $(this).attr('href');
            var scrollTo = $(id).offset().top;
            $('html, body').animate({scrollTop: scrollTo}, 700);
          });

          $('#scroll').on('click', function () {;
              var scrollTo = $('#about').offset().top;
              $('html, body').animate({scrollTop: scrollTo}, 500);
            });

  $('.slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    dots: true,
    infinite: true
  });

});
