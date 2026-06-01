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
  
    function signIn() {
    const errorMsg = document.getElementById("errorMsg");
    const successMsg = document.getElementById("successMsg");

    errorMsg.style.display = "none";
    successMsg.style.display = "none";

    if (email.value.trim() === "" || password.value.trim() === "") {
        errorMsg.style.display = "block";
        return;
    }

    //to be replaced by backend
    successMsg.style.display = "block";
    signInBtn.disabled = true;

    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}