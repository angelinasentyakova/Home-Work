$(function () {
  const $testForm = $('#registration');
  
  $testForm.on('submit', function (e) {
    e.preventDefault();
    if (!$testForm.valid()) return false;
    
    $.ajax({
      type: "get",
      dataType: "json",
      url: $testForm.attr('action'),

    }).done(function(response) {
      if (response.status) {
        $('.js-id').html(response.data.userId)
        $('.success').openModal()
        return
      } 
      $('.js-text').html(response.data.email)
      $('.reset').openModal()

    }).fail(function(response) {
      $('.js-error').html(response.status + " " + response.statusText)
      $('.errors').openModal()
    });
  });
});