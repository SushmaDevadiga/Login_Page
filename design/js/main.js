
document.addEventListener('DOMContentLoaded', function(){
    const usernameInput = document.querySelector("#userName");
    const passwordInput = document.querySelector("#password");
    const loginButton = document.querySelector("#loginButton");
    const usernameError = document.querySelector("#usernameError");
    const passwordError = document.querySelector("#passwordError");

    function validationUsername(){
        if(usernameInput.value.length < 3){
            usernameError.textContent = `Username to be atleast 3 characters long`;
            return false;
        }
        else{
            usernameError.textContent = ``;
            return true;
        }
    }
    function validationPassword(){
        const password = passwordInput.value;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);

        if(password.length < 8 || !hasUppercase || !hasLowercase || !hasNumber){
            passwordError.textContent = `Password should be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one number.`;
            return false;
        }
        else{
            passwordError.textContent = ``;
            return true;
        }
    }

    function validation(){
        const isUsernameValid = validationUsername();
        const isPasswordValid = validationPassword();
        loginButton.disabled = !(isUsernameValid && isPasswordValid);
    }

    usernameInput.addEventListener('blur', validationUsername);
    passwordInput.addEventListener('blur', validationPassword);
    usernameInput.addEventListener('input', validation);
    passwordInput.addEventListener('input', validation);

    document.getElementById('loginForm').addEventListener('submit', function(event){
        event.preventDefault();
        if(loginButton.disabled) return;
        alert('Form Submitted successfully!');

    });
});

