// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
  $('#user-about').html($('#user_about').val());
  $('.user_form').submit(function () {
    $('#user_about').val($('#user-about').html());
  });
});
