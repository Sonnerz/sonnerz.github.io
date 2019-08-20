(function ($) {

  // Init Wow
  wow = new WOW({
    animateClass: 'animated',
    offset: 100
  });
  wow.init();

  $(".navbar-collapse a").on('click', function () {
    $(".navbar-collapse.collapse").removeClass('in');
  });

  $(".navbar-collapse a").on('click', function () {
    $(this).addClass('active');
  });

  // Navigation scrolls
  $('.navbar-nav li a').bind('click', function (event) {
    $('.navbar-nav li').removeClass('active');
    $(this).closest('li').addClass('active');
    var $anchor = $(this);
    var nav = $($anchor.attr('href'));
    if (nav.length) {
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');

      event.preventDefault();
    }
  });

  //jQuery to collapse the navbar on scroll
  $(window).scroll(function () {
    if ($(".navbar-default").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

})(jQuery);


$.getJSON("projects.json", function (projects) {

  const projList1 = document.querySelector('#projects-col1');
  const projList2 = document.querySelector('#projects-col2');
  const projList3 = document.querySelector('#projects-col3');

  const col1 = projects
    .filter(p => p.col == 1)
    .map(function (p) {
      const html = `<a href="${p.url}"title="${p.title}"><img src="${p.img}"class="img-responsive" alt="${p.title}"></a>`;
      return html;
    }).join('');


  const col2 = projects
    .filter(p => p.col == 2)
    .map(function (p) {
      const html = `<a href="${p.url}"title="${p.title}"><img src="${p.img}"class="img-responsive" alt="${p.title}"></a>`;
      return html;
    }).join('');


  const col3 = projects
    .filter(p => p.col == 3)
    .map(function (p) {
      const html = `<a href="${p.url}"title="${p.title}"><img src="${p.img}"class="img-responsive" alt="${p.title}"></a>`;
      return html;
    }).join('');

  if (window.location.pathname != "/index.html") {
    projList1.innerHTML = col1;
    projList2.innerHTML = col2;
    projList3.innerHTML = col3;
  };


}
);
