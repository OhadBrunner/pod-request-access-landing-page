// JavaScript

var email = $(".email-input input");
var emailButton = $("div.email-input button");
var answer = $(".answer");

emailButton.click(function() {
  if (email.val() === "") {
    answer.val("Oops! please add your email");
  } else if (!email.val().includes("@")) {
    answer.val("Oops! please check your email");
  } else {
    answer.val("Welcome on board!");
  }
});
