$(document).ready(function() {

  // Random Password Generator
  $(function() {
    $('#generate-password').on('click', function(e) {
      e.preventDefault();

      let passLength = $('#character-number').val();
      let charset = '';
      let randPass = '';

      if ($('[name="symbols"]').is(':checked'))
        charset += '@#$%^&?!';

      if ($('[name="numbers"]').is(':checked'))
        charset += '0123456789';

      if ($('[name="low-chars"]').is(':checked'))
        charset += 'abcdefghijklmnopqrstuvwxyz';

      if ($('[name="up-chars"]').is(':checked'))
        charset += 'ABCDEFGHIJKLMNOPQRSTUVIXYZ';
      console.log({ passLength, charset });

      for (let i = 0; i < passLength; i++) {
        let randNum = Math.floor(Math.random() * charset.length);
        randPass += charset.substring(randNum, randNum + 1);
      }
      $('[name="newPassword"]').val(randPass);
    });
  });

  // Copy the text in username & password fields

  $('.copy-btn').click(function() {
    navigator.clipboard.writeText($(this).siblings().text())
      .then(() => {
        $('.fa-check').removeClass("fa-check").addClass("fa-copy");
        $(this).children().removeClass("fa-copy").addClass("fa-check");
      })
      .catch(err => console.log('error', err));
  });

});


