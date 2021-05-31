$(function () {
  $('#registration').validate({
    rules: {
      password: {
        required: true,
        passwordValidation: true,
      },
      passwordConfirm: {
        required: true,
        equalTo: "#password",
      }
    }
    
  });
  $.validator.addMethod("passwordValidation", function(value) {
      return /[a-z]/.test(value) 
      && /[A-Z]/.test(value) 
      && /[0-9]/.test(value)
  }, "Must contain at leat one numeric character, one uppercase letter and one lowercase letter");
});