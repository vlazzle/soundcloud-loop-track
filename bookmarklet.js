(function($) {
  var $play = $('.controls a.play:first'),
      poll = true;

  function startPolling() {
    setInterval(function() {
      if (poll) {
        if (!$play.hasClass('playing')) {
          $play.trigger('click', true);
        }
      }
    }, 500);
  }

  $play.bind('click', function(e, loop) {
    if (typeof loop === 'undefined' || !loop) {
      poll = !$play.hasClass('playing');
    }
  });

  startPolling();
}(jQuery));
