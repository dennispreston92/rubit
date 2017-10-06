// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.atwho
//= require jquery_ujs
//= require bootstrap
//= require bindWithDelay
//= require moment.min
//= require fullcalendar.min
//= require jquery.datetimepicker
//= require_tree .

$(document).ready(function () {
  $("#event_event_datetime").datetimepicker({format: 'Y/m/d H:i'});
  $("#user_dob").datetimepicker({timepicker: false, format: 'Y/m/d', maxDate: '0'});
  $('[data-toggle="tooltip"]').tooltip();
  // Remove HTML from pasted text BEGIN
  $('[contenteditable=true]').bind('paste', function(e) {

    var text = '';
    var that = $(this);

    if (e.clipboardData)
      text = e.clipboardData.getData('text/plain');
    else if (window.clipboardData)
      text = window.clipboardData.getData('Text');
    else if (e.originalEvent.clipboardData)
      text = $('<div></div>').text(e.originalEvent.clipboardData.getData('text'));


    if (document.queryCommandSupported('insertText')) {
      document.execCommand('insertHTML', false, $(text).html());
      return false;
    } else { // IE > 7
      that.find('*').each(function() {
        $(this).addClass('within');
      });

      setTimeout(function() {
        that.find('*').each(function() {
          $(this).not('.within').contents().unwrap();
        });
      }, 1);
    }

  });
  // Remove HTML from pasted text END
});
