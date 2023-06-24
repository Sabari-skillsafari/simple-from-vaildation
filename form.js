let userName = document.querySelector("#userName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let cPassword = document.querySelector("#cPassword");
let submit = document.querySelector("button");
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordPattern =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=\S+$).{8,}$/;

window.addEventListener("change", () => {
  if (userName.value) {
    userName.className = "border-green";
  } else if (userName.value == "") {
    userName.className = "border-red";
    let next = userName.nextElementSibling;
    next.innerHTML = "UserName invalid";
    next.className = "txt-red";
  }
  if (emailPattern.test(email.value)) {
    email.className = "border-green";
  } else if (!emailPattern.test(email.value)) {
    email.className = "border-red";
    let next = email.nextElementSibling;
    next.textContent = "Email is invalid";
    next.className = "txt-red";
  }
  if (passwordPattern.test(password.value)) {
    password.className = "border-green";
  } else if (!passwordPattern.test(password.value)) {
    password.className = "border-red";
    let next = password.nextElementSibling;
    next.textContent =
      "password is invalid.check if the password contains at least one digit, one lowercase letter, one uppercase letter, one special character (@#$%^&+=!) and has a minimum length of 8 characters.";
    next.className = "txt-red";
  }
  if (password.value === cPassword.value) {
    cPassword.className = "border-green";
  } else {
    cPassword.className = "border-red";
    let next = cPassword.nextElementSibling;
    next.textContent = "confirm password & Password is not same";
    next.className = "txt-red";
  }
});
submit.addEventListener("click", (e) => {
  if (
    userName.value &&
    emailPattern.test(email.value) &&
    passwordPattern.test(password.value) &&
    password.value === cPassword.value
  ) {
    alert(`The form is submitted successfully.
            userName:${userName.value},
            email:${email.value}`);
  } else {
    alert("Please check form!!");
  }
});
