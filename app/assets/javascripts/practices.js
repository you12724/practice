$(function() {
  $('.searchForm__input__form').focusout(function(e) {
    $('.searchForm__candidates').addClass('hide');
  }).focusin(function(e){
    $('.searchForm__candidates').removeClass('hide');
  });
});
