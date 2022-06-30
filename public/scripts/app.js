// Client facing scripts here
$(document).ready(function () {
  console.log('app.js loaded')

  $('.password-content').click(function () {
    let passwordNickname = $(this).children().text() //Retrieves the content of the hidden <p> with the index of the password

    $('.display-password').hide(); //Hides any passwords currently on display
    $(`.${passwordNickname}`).slideDown("slow"); //Slides down the selected password
  })

  $("#show-form").on('click', () => {
    $(".new-password").slideDown("hidden");
  })

  $(".new-password-form").on("submit", function (event) {
    const data = $(this).serialize();
    $.post("/passwords", data)
    });

    // Show passwords in each category
    $('#comms-and-social').click(function () {
    $('.password-content').hide();
    $('.cat1').slideDown("slow");
  })

  $('#supplies').click(function () {
    $('.password-content').hide();
    $('.cat2').slideDown("slow");
  })

  $('#work-portals').click(function () {
    $('.password-content').hide();
    $('.cat3').slideDown("slow");
  })

  $('#all-passwords').click(function () {
    $('.password-content').slideDown("slow");
  })

  // Updates password information through edit button
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

  $(".edit-button").click(function () {
    $(".edit-form-container").slideToggle("fast");
  });
})
;

