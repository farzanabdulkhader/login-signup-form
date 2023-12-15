function loginUser() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;

  // Perform authentication logic (replace this with your actual authentication mechanism)
  if (username === "demo" && password === "password") {
    showNotification("Login successful!");
  } else {
    showError("Invalid username or password");
  }

  // Prevent form submission
  return false;
}

function signupUser() {
  var username = document.getElementById("signupUsername").value;
  var password = document.getElementById("signupPassword").value;

  // Perform user registration logic (replace this with your actual registration mechanism)
  // For simplicity, we assume successful registration every time
  showNotification("Sign Up successful!");

  // Prevent form submission
  return false;
}

function showNotification(message) {
  alert(message); // You can replace this with a custom notification or a library like SweetAlert
}

function showError(message) {
  alert("Error: " + message);
}
