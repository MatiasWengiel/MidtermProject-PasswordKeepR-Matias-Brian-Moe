$(document).ready(function () {
  $(".edit-form").on("submit", function (e) {
    e.preventDefault();
    const formValues = $(this).serialize();
    const url = $(this).attr("action");
    $.ajax({
      type: "POST",
      url,
      data: formValues,
    });
    setTimeout(function () {
      location.reload(true);
    }, 100);
  });
  $("#edit-button");
});
