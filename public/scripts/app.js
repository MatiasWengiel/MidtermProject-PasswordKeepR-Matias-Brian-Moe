// Client facing scripts here
$(document).ready(function() {
  console.log('app.js loaded');

  $('.password-content').click(function() {
    let passwordNickname = $(this).children().text(); //Retrieves the content of the hidden <p> with the index of the password

    $('.display-password').hide(); //Hides any passwords currently on display
    $(`.${passwordNickname}`).slideDown("slow"); //Slides down the selected password
  });

  $("#show-form").on('click', () => {
    $(".new-password").slideToggle("slow");
  });

  $(".new-password-form").on("submit", function() {
    const data = $(this).serialize();
    $.post("/passwords", data);
  });

  // Show passwords in each category
  $('#comms-and-social').click(function() {
    $('.password-content').hide();
    $('.cat1').slideDown("slow");
  });

  $('#supplies').click(function() {
    $('.password-content').hide();
    $('.cat2').slideDown("slow");
  });

  $('#work-portals').click(function() {
    $('.password-content').hide();
    $('.cat3').slideDown("slow");
  });

  $('#all-passwords').click(function() {
    $('.password-content').slideDown("slow");
  });

  //Searches for passwords containing specific query in nickname

  $('.search-btn').click(function(e) {
    e.preventDefault();
    let queryLowerCase = $(this).siblings().val().toLowerCase();
    const queryUpperCase = $(this).siblings().val().toUpperCase();
    $('.password-content').hide();
    $(`button:contains('${queryLowerCase}')`).slideDown("slow");
    $(`button:contains('${queryUpperCase}')`).slideDown("slow");

  });

  // Updates password information through edit button
  $(".edit-form").on("submit", function(e) {
    e.preventDefault();
    const formValues = $(this).serialize();
    const url = $(this).attr("action");
    $.ajax({
      type: "POST",
      url,
      data: formValues,
    });
    setTimeout(function() {
      location.reload(true);
    }, 100);
  });

  $(".edit-button").click(function() {
    $(".edit-form-container").slideToggle("fast");
  });
})
;

