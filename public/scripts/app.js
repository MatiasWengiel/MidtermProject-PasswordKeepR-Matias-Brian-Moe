// Client facing scripts here
$(document).ready(function() {
  console.log('app.js loaded')
  $('.password-content').click(function() {
    let passwordNickname = $(this).children().text() //Retrieves the content of the hidden <p> with the index of the password

    $('.display-password').hide(); //Hides any passwords currently on display
    $(`.${passwordNickname}`).slideDown("slow"); //Slides down the selected password
  })

  $("#show-form").on('click', () =>{
    $(".new-password").slideDown("hidden");
  })

  $(".new-password-form").on("submit", function(event){
    event.preventDefault();
    console.log("submit password")
    const password = $(this).find("input").val()
    $(".new-password").slideUp("hidden");


    // const data = {password};
    const data = $(this).serialize();
    console.log(data);
    $.post("/api/passwords", data)
    .then(res =>{
      console.log(res) // Adding new password to password
    })
  })

})
