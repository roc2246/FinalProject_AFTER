/* eslint-disable no-undef */
/* eslint-disable func-names */
/* eslint-disable no-useless-escape */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
// RegEx and Text Boxes
const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const subTxtBox = document.subscribe.emailSub;
const unsubTxtBox = document.unsubscribe.emailUnsub;

// Turns textbox color to yellow on focus
$(document).ready(() => {
  $('#emailSub').focus(() => {
    $('#emailSub').css('background-color', 'yellow');
  });
  $('#emailSub').focusout(() => {
    $('#emailSub').css('background-color', 'white');
  });

  $('#emailUnsub').focus(() => {
    $('#emailUnsub').css('background-color', 'yellow');
  });
  $('#emailUnsub').focusout(() => {
    $('#emailUnsub').css('background-color', 'white');
  });
});

// Validates email before subscribing or unsubscribing
function isEmail(form, email, handler) {
  if (regexEmail.test(email.value)) {
    form.setAttribute('action', handler);
    form.setAttribute('onsubmit', 'return true;');
  } else {
    alert('Please enter a valid email address.');
    email.focus();
    email.select();
    form.setAttribute('action', '');
    form.setAttribute('onsubmit', 'return false;');
  }

  // Checks if both sub and unsub fields have values
  if (subTxtBox.value !== '' && unsubTxtBox.value !== '') {
    alert('Please enter only one email.');
    form.setAttribute('action', '');
    form.setAttribute('onsubmit', 'return false;');
  }
}
