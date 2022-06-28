$(document).ready(function () {
  $(".edit-form").on("submit", function (e) {
    e.preventDefault();
    const email = $(".loginEmail").val();
    const password = $(".loginPassword").val();
    const label = $("#label").text();
    const data = { email, password, label };
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/passwords",
      data,
    });
    setTimeout(function () {
      location.reload(true);
    }, 250);
  });
});
