//Turns textbox color to yellow on focus
 $(document).ready(function () {
   $("#emailSub").focus(function(){
      $("#emailSub").css("background-color", "yellow");
    });
    $("#emailSub").focusout(function(){
      $("#emailSub").css("background-color", "white");
});

    $("#emailUnsub").focus(function(){
     $("#emailUnsub").css("background-color", "yellow");
    });
    $("#emailUnsub").focusout(function(){
        $("#emailUnsub").css("background-color", "white");
});

});

//RegEx and Text Boxes
var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var subTxtBox = document.subscribe.emailSub;
var unsubTxtBox = document.unsubscribe.emailUnsub;


//Validates email before subscribing or unsubscribing
function isEmail(form, email, handler){
    if (regexEmail.test(email.value)){
        form.setAttribute("action", handler);
        form.setAttribute("onsubmit", "return true;");
    } else {
        alert("Please enter a valid email address.");
        email.focus();
        email.select();
        form.setAttribute("action", "");
        form.setAttribute("onsubmit", "return false;");
    }
}
