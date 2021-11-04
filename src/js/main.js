$(document).ready(() => {
  $('.js-nav-opener').on('click', function () {
      if($('.freshlife-header').hasClass('active')) {
          $('.freshlife-header').removeClass('active');
      } else {
          $('.freshlife-header').addClass('active');
      }
  })
});

