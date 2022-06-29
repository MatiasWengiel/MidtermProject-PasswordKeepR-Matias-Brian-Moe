$(document).ready(function() {
  console.log('helpers is loaded')

  // Generate Password is a (relatively) extensive library for generating random and unique passwords.

  $(function () {
    //'use strict'
    $('#generate-password').on('click', function (e) {
      console.log("This is the password function")
      e.preventDefault();

      let passLength = $('#character-number').val()
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
      $('[name="newPassword"]').val(randPass);
    })
  })
  // Copy the text in username & password fields

  $('.copy-btn').click(function() {
    navigator.clipboard.writeText($(this).siblings().text())
    .then( () => {
      $('.fa-check').removeClass("fa-check").addClass("fa-copy")
      $(this).children().removeClass("fa-copy").addClass("fa-check")
    })
    .catch( err => console.log('error', err))
})


  })
// });

