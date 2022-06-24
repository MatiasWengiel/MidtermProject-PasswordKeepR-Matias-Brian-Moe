$(document).ready(function() {



// Copy the text in username & password fields

let copyText = document.querySelector("#user-name");
let copyPassword = document.querySelector("#password");

const handleClickEvent = function(arr) {
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

});
