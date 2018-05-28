$(document).ready(function () {
  const signupLink = $('#signup');
  const signinLink = $('#signin');
  const signinButton = $("#sign-in-button");
  const signupButton = $("#sign-up-button");
  const emailInput = $("#auth-form-email-input");
  const passwordInput = $("#auth-form-password-input");

  const showContent = event => {
    event.preventDefault();

    const shouldToggleClasses = $(event.target).attr("data-signup");

    $("#auth-form-name-input").toggleClass("hidden", shouldToggleClasses);
    $("#signin-info").toggleClass("hidden", shouldToggleClasses);
    $("#signup-info").toggleClass("hidden", shouldToggleClasses);
    $("#auth-form-forgotten-pass").toggleClass("hidden", shouldToggleClasses);
    signinButton.toggleClass("hidden", shouldToggleClasses);
    signupButton.toggleClass("hidden", !shouldToggleClasses);
  }

  const signin = event => {
    alert('signin');
  }

  const signup = event => {
    alert('signup');
  }

  const validateEmail = event => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test($(event.target).val());

    $("#email-validator").toggleClass("hidden", valid)
  }

  const validatePassword = event => {
    const value = $(event.target).val();
    const valid = value.length > 6;
  
    $("#password-validator").toggleClass("hidden", valid)
  }

  signupLink.click(showContent);
  signinLink.click(showContent);
  signinButton.click(signin);
  signupButton.click(signup);
  emailInput.change(validateEmail);
  passwordInput.change(validatePassword);
});