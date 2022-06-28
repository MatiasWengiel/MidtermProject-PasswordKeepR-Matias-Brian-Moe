$(document).ready(function() {
  console.log('helpers is loaded')

// Copy the text in username & password fields

  $('.copy-btn').click(function() {
    navigator.clipboard.writeText($(this).siblings().text())
    .then( () => {
      $('.fa-check').removeClass("fa-check").addClass("fa-copy")
      $(this).children().removeClass("fa-copy").addClass("fa-check")
    })
    .catch( err => console.log('error', err))
  })
});
