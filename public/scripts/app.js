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
    //event.preventDefault();
    //$(".new-password").slideUp("hidden");



    const data = $(this).serialize();
    $.post("/passwords", data)
      .then(res => {
      })

     });

    // // Define a function called loadTweets that is responsible for
    // //fetching tweets from the http://localhost:8080/tweets page.
    // const loadPassword = function () {

    //   $.get("http://localhost:8080/passwords/json")
    //     .then(function (morePost) {

    //       renderPassword(morePost);
    //     });

    // };

    // // Define a function called renderTweets,responsible for taking in an array of tweet objects
    // // and then appending each one to the #tweets-container.
    // const renderPassword = function (passwords) {
    //   console.log("this is passwords obj",passwords)
    //   for (let password in passwords.passwords) {
    //     const userPassword = $(createpasswordElement(password));
    //     console.log("This is the user password", userPassword)
    //     //userPassword.find(".password-list li").text(password.content.text);
    //     $('.password-list').prepend(userPassword);
    //   }

    // };

    // // define a function createTweetElement that takes in a tweet object and is responsible for returning
    // //a tweet <article> element containing the entire HTML structure of the tweet.
    // const createpasswordElement = function(password) {
    //   console.log("this is pass",password)
    //   let $password = $(``);

    //   return $password;

    // };

    // loadPassword();



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
  })
;

