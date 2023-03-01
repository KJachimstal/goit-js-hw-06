const email = document.querySelector("form.login-form input[name=email]");
const pass = document.querySelector("form.login-form input[name=password]");
const submit = document.querySelector("button[type=submit]");
const form = document.querySelector(".login-form");

function preventRefresh(event) {
  event.preventDefault();
}

form.addEventListener("submit", preventRefresh);

submit.addEventListener("click", () => {
  if (email.value == "" || pass.value == "") {
    alert("Wszystkie pola formularza powinny zostać uzupełnione!");
    return;
  }

  let userCredentials = {
    email: email.value,
    password: pass.value,
  };

  console.log(userCredentials);

  form.reset();
});
