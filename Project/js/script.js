/**
 * Created by idan on 29/04/15.
 */

// EventListeners
function onLoad() {
    var object;

    // OnClick event listener to hide the login section
    $('#btnLoginClose').click(function() {
        $('#loginSection').fadeOut(200);
    });

    // OnClick event to login button
    $('#login-button').click(sendForm);
}

function sendForm() {
    var boolContinue = true;

    // UserName check
    var userNameReg = /[^\da-z!\-]/;
    var userName = $('#username');
    var username_error = $('#username-error');
    if (userName.val().length === 0) {
        username_error.html('יש להזין שם משתמש');
        username_error.show(250);
        boolContinue = false;
    }
    else if (userNameReg.test(userName.val())) {
        username_error.html('שם משתמש מכיל תווים אסורים');
        username_error.show(250);
        boolContinue = false;
    }
    else {
        username_error.hide(100);
    }

    // Password Check
    var password = $('#password');
    var password_error = $('#password-error');

    if (password.val().length === 0) {
        password_error.html('יש להזין סיסמא');
        password_error.show(250);
        boolContinue = false;
    }
    else if (password.val().length > 8) {
        password_error.html('סיסמא אסורה: עליך להזין עד 8 תווים');
        password_error.show(250);
        boolContinue = false;
    }
    else if (password.val().indexOf(' ') > -1) {
        password_error.html('סיסמא אסורה: עליך להזין תווים ללא רווחים');
        password_error.show(250);
        boolContinue = false;
    }
    else {
        password_error.hide(100);
    }

    // If connection was successful
    if (boolContinue) {
        var $loginSection = $('#loginSection');
        $loginSection.hide(500, function() {
            $loginSection.delay(300);
            $loginSection.show(1200);
            $loginSection.html('התחברת בהצלחה!');
        }).html('');
    }
}