    const password = document.getElementById("password");
    const toggle = document.getElementById("togglePassword");

    toggle.addEventListener("click", function () {

        if (password.type === "password") {
            password.type = "text";
            toggle.textContent = "⌣";
        } else {
            password.type = "password";
            toggle.textContent = "👁";
        }

    });
    
    const confirmPassword = document.getElementById("confirmPassword");
    const toggleConfirm = document.getElementById("toggleConfirmPassword");

    toggleConfirm.addEventListener("click", function () {
        if (confirmPassword.type === "password") {
            confirmPassword.type = "text";
            toggleConfirm.textContent = "⌣";
        } else {
        confirmPassword.type = "password";
        toggleConfirm.textContent = "👁";
        }
    });


    const input = document.getElementById("password")
    const result = document.getElementById("result")
    input.addEventListener("input",() => {
        const val = input.value;
        let score = 0;
        if (val.length >= 8 ) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;
        if (!val){
                result.textContent = "";
                result.className ="strength";
            }
        else if (score <= 1) {
                result.textContent = "Weak password";
                result.className ="strength weak";
            }
        else if (score <= 3) {
                result.textContent = "Medium strenght";
                result.className ="strength medium";
            }
        else {
                result.textContent = "Strong password";
                result.className ="strength strong";
        }
        } )

        function signUp() {
        const errorMsg = document.getElementById("errorMsg");
        const successMsg = document.getElementById("successMsg");

        errorMsg.style.display = "none";
        successMsg.style.display = "none";

        if (password.value !== confirmPassword.value) {
        errorMsg.style.display = "block";
        return;
        }

        successMsg.style.display = "block";
        signUpBtn.disabled = true;
    
        setTimeout(() => {
        window.location.href = "SignIn.html";
        }, 2000);
}

    const signUpBtn = document.querySelector("button[onclick='signUp()']");
    signUpBtn.disabled = true;

    const fullName = document.getElementById("fullName");
    const email = document.getElementById("email");

    function checkForm() {
        if (
            fullName.value.trim() !== "" &&
            email.value.trim() !== "" &&
            password.value.trim() !== "" &&
            confirmPassword.value.trim() !== ""
        ) {
            signUpBtn.disabled = false;
        } else {
            signUpBtn.disabled = true;
        }
    }

    fullName.addEventListener("input", checkForm);
    email.addEventListener("input", checkForm);
    password.addEventListener("input", checkForm);
    confirmPassword.addEventListener("input", checkForm);

