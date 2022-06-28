$(document).ready(function () {



  // Copy the text in username & password fields

  let copyText = document.querySelector("#user-name");
  let copyPassword = document.querySelector("#password");

  const handleClickEvent = function (arr) {
    let input = arr.querySelector("input.text");
    input.select();
    document.execCommand("copy");
    arr.classList.add("active");
    window.getSelection().removeAllRanges();
    setTimeout(function () {
      arr.classList.remove("active");
    }, 2500);
  }

  copyText.querySelector("button").addEventListener("click", function () {
    handleClickEvent(copyText)
  });

  copyPassword.querySelector("button").addEventListener("click", function () {
    handleClickEvent(copyPassword);
  });


  // Generate Password is a (relatively) extensive library for generating random and unique passwords.

  $(function () {
    //'use strict'
    $('#generate-password').on('click', function (e) {
      console.log("This is the password function")
      e.preventDefault();

      let passLength = $('select').val()
      let = charset = ''
      let = randPass = '';

      if ($('[name="symbols"]').is(':checked'))
        charset += '@#$%^&?!';

      if ($('[name="numbers"]').is(':checked'))
        charset += '0123456789';

      if ($('[name="low-chars"]').is(':checked'))
        charset += 'abcdefghijklmnopqrstuvwxyz';

      if ($('[name="up-chars"]').is(':checked'))
        charset += 'ABCDEFGHIJKLMNOPQRSTUVIXYZ';
      console.log({ passLength, charset })

      for (let i = 0; i < passLength; i++) {
        let randNum = Math.floor(Math.random() * charset.length);
        randPass += charset.substring(randNum, randNum + 1);
      }
      console.log({randPass})
      $('[name="password"]').val(randPass);
    })
  })

})
