$(document).ready(function () {
  console.log("jquery loaded");
  $(".edit-form").on("submit", function (e) {
    e.preventDefault();
    const email = $(".loginEmail").val();
    const password = $(".loginPassword").val();
    const data = { email, password };
    console.log(data);
    $.ajax({
      type: "POST",
      url: "/passwords",
      data,
    });
  });
});
