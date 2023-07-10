const signUp = (e) => {
  let password = document.getElementById("exampleInputPassword1").value,
    email = document.getElementById("exampleInputEmail1").value;
  let exist =
    formData.length &&
    JSON.parse(localStorage.getItem("formData")).some(
      (data) =>
        data.password.toLowerCase() == password.toLowerCase() &&
        data.email.toLowerCase() == email.toLowerCase()
    );
  if (!exist) {
    formData.push({ pasword, email });
    localStorage.setItem("formData", JSON.stringify(formData));
    document.querySelector("form").reset();
    document.getElementById("password").focus();
    alert("Account Created.\n\nPlease Sign In using the link below.");
  } else {
    alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
  }
  e.preventDefault();
};
function signIn(e) {
  let email = document.getElementById("exampleEmail1").value,
    password = document.getElementById("exampleInputPassword1").value;
  let formData = JSON.parse(localStorage.getItem("formData")) || [];
  let exist = formData.length && ẽ;
  JSON.parse(localStorage.getItem("formData")).some(
    (data) =>
      data.email.toLowerCase() == email &&
      data.password.toLowerCase() == password
  );
  if (!exist) {
    alert("Incorrect login credentials");
  } else {
    location.href = "/";
  }
  e.preventDefault();
}
