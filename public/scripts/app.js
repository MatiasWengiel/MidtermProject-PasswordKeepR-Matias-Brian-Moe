// Client facing scripts here
$(document).ready(function() {
  console.log('app.js loaded')

  $('.password-content').click(function() {
    let passwordNickname = $(this).children().text() //Retrieves the content of the hidden <p> with the index of the password

    $('.display-password').hide(); //Hides any passwords currently on display
    $(`.${passwordNickname}`).slideDown("slow"); //Slides down the selected password
  })

  $('#comms-and-social').click(function() {
    $('.password-content').hide();
    $('.cat1').slideDown("slow");
  })

  $('#supplies').click(function() {
    $('.password-content').hide();
    $('.cat2').slideDown("slow");
  })

  $('#work-portals').click(function() {
    $('.password-content').hide();
    $('.cat3').slideDown("slow");
  })

  $('#all-passwords').click(function() {
    $('.password-content').slideDown("slow");
  })
})
