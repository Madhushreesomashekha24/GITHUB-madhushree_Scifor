"use strict";

document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var messageDiv = document.getElementById("message"); // Password validation rules

  var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/; // Check if all fields are filled

  if (!name || !email || !password) {
    messageDiv.innerHTML = "<div class='alert alert-danger'>Please fill in all the fields.</div>";
    return;
  } // Validate password strength


  if (!passwordPattern.test(password)) {
    messageDiv.innerHTML = "\n        <div class='alert alert-warning'>\n          Password must be at least 8 characters long and include at least one letter, one number, and one special character.\n        </div>";
    return;
  } // Success message


  messageDiv.innerHTML = "<div class='alert alert-success'>Welcome, ".concat(name, "! You have logged in successfully.</div>");
});