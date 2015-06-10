/**
 * Created by idan on 29/04/15.
 */

// EventListeners
function onLoad() {
    var object;

    // OnClick event to login button
    object = document.getElementById('login-button');
    object.addEventListener('click', function() {
        sendForm()
    });
}

function hideElement(id) {
    $("#" + id).fadeOut(200);
}

function sendForm() {
    var boolContinue = false;

    // UserName check
    var userNameReg = /[^\da-z!\-]/;
    var userName = document.getElementById('username');
    var username_error = document.getElementById('username-error');
    if (userName.value.length === 0) {
        username_error.style.display = 'block';
        username_error.innerHTML = 'יש להזין שם משתמש';
    }
    else if (userNameReg.test(userName.value)) {
        username_error.style.display = 'block';
        username_error.innerHTML = 'שם משתמש מכיל תווים אסורים';
    }
    else {
        username_error.style.display = 'none';
        boolContinue = true;
    }

    // Password Check
    var password = document.getElementById('password');
    var password_error = document.getElementById('password-error');

    if (password.value.length === 0) {
        password_error.style.display = 'block';
        password_error.innerHTML = 'יש להזין סיסמא';
    }
    else if (password.value.length > 8) {
        password_error.style.display = 'block';
        password_error.innerHTML = 'סיסמא אסורה: עליך להזין עד 8 תווים';
    }
    else if (password.value.indexOf(' ') > -1) {
        password.style.display = 'block';
        password_error.innerHTML = 'סיסמא אסורה: עליך להזין תווים ללא רווחים';
    }
    else {
        password_error.style.display = 'none';
        boolContinue = boolContinue && true;
    }

    // If connection was successful
    if (boolContinue) {
        var loginSection = document.getElementById('loginSection');
        loginSection.innerHTML = 'התחברת בהצלחה!'
    }
}