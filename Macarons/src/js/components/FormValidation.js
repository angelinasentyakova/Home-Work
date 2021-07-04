$(function () {
  $("#js-form").validate({
    rules: {
      name: {
        required: true,
      },
      tel: {
        required: true,
        numberValidation: true,
      },
    },
  });
  $.validator.addMethod(
    "numberValidation",
    function (value) {
      return /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value);
    },
    "Please enter a valid number, starting from +7 or 8"
  );
});
