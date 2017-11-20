$(document).ready(function() {
  const notes = {
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
  }

  $('.instrument').on('click', 'button', function(event) {
    $(this).click(function(event) {
      note = $(this).html();
      let noteId = "#" + note + "Audio";
      $(noteId).get(0).play();
    });
  });

  $('body').keydown(function(event) {
    if (notes[event.which]) {
      note = notes[event.which];
      let noteId = "#" + note + "Audio";
      $(noteId).get(0).play();
    }
  });
});
