$(function () {
  $('[data-toggle="popover"]').popover();
});

// Clicking the menu button
$('#open-menu').click(() => {
  // when not opened yet: move the page to the left and show the menu simultaneously
  if (!$('main').hasClass('transform')) {
    $('main').addClass('transform'); // move to the left using css
    $('#right-menu').show(); // show the menu
    $('#right-menu').removeAttr('style'); // get rid of empty style
    $('body').addClass('overflow'); // get rid of the scroll bar
  } else { // when already opened: move the page back to the right and then hide the menu
    $('main').removeAttr('class');
    setTimeout(() => {
      $('#right-menu').hide(); // hide the menu
    }, 200);
    setTimeout(() => {
      $('body').removeAttr('class'); // get the scroll bar back
    }, 100);
  }
});

// To make the popover go away when clicking elsewhere
$('html').on('click', function(e) {
  if (typeof $(e.target).data('original-title') == 'undefined') {
    $('[data-original-title]').popover('hide');
  }
});
