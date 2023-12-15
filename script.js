document.getElementById("signupForm").addEventListener("submit", signupUser);
function signupUser(event) {
  event.preventDefault();

  const username = document.getElementById("signupUsername").value;
  const password = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById(
    "signupConfirmPassword"
  ).value;

  if (password !== confirmPassword) {
    showCustomAlert("Signin unsuccessfull. Password doesn't match.");
    return;
  } else {
    // Step 1: Retrieve existing data from localStorage
    const existingUserDataString = localStorage.getItem("userData");
    let existingUserData = existingUserDataString
      ? JSON.parse(existingUserDataString)
      : [];
    //check for duplicate data
    if (existingUserData.some((item) => item.username === username)) {
      showCustomAlert("Username already exists. Try loging in");
      return;
    }
    // Step 2: Add new user data to existing data
    const newUser = {
      username: username,
      password: password,
    };

    existingUserData.push(newUser);

    // Step 3: Save updated data back to localStorage
    const updatedUserDataString = JSON.stringify(existingUserData);
    localStorage.setItem("userData", updatedUserDataString);

    showCustomAlert("Sign Up Successfull😊");
    document.getElementById("signupForm").reset();
    return;
  }
}

function loginUser(event) {
  event.preventDefault();
  console.log("login function called");

  // Retrieve user data from localStorage
  const storedUserDataString = localStorage.getItem("userData");

  // Check if there is any stored user data
  if (!storedUserDataString) {
    showCustomAlert("User not found. Please sign up.");
    return;
  }

  // Convert JSON string to object
  const storedUserData = JSON.parse(storedUserDataString);

  // Get input values
  const inputUsername = document.getElementById("loginUsername").value;
  const inputPassword = document.getElementById("loginPassword").value;

  // Check if the user with the provided username exists
  const user = storedUserData.find((user) => user.username === inputUsername);

  if (!user) {
    showCustomAlert("User not found. Please check your username.");
    return;
  }

  // Check if the provided password matches the stored password
  if (user.password !== inputPassword) {
    showCustomAlert("Incorrect password. Please try again.");
    return;
  }

  // User is authenticated, show success message
  showCustomAlert("Login successful. Welcome, " + user.username + "!");
  document.getElementById("loginForm").reset();
}

function toggleForms() {
  const loginForm = document.getElementById("loginFormContainer");
  const signupForm = document.getElementById("signupFormContainer");

  loginForm.classList.toggle("signup-container");
  signupForm.classList.toggle("signup-container");
}

function showCustomAlert(alertMessage) {
  const customAlert = document.getElementById("customAlert");

  // Set the message and display the custom alert
  customAlert.innerText = alertMessage;
  customAlert.style.display = "block";

  // Reset the animation to restart
  customAlert.style.animation = "none";
  customAlert.offsetHeight; /* Trigger reflow */
  customAlert.style.animation = null;
}
