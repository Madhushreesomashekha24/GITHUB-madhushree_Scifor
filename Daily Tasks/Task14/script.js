  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();


    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
     
    const messageDiv = document.getElementById("message");

    // Password validation rules
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;



     // Check if all fields are filled
    if (!name || !email || !password) {
      messageDiv.innerHTML = "<div class='alert alert-danger'>Please fill in all the fields.</div>";
      return;
    }

     // Validate password strength
    if (!passwordPattern.test(password)) {
      messageDiv.innerHTML = `
        <div class='alert alert-warning'>
          Password must be at least 8 characters long and include at least one letter, one number, and one special character.
        </div>`;
      return;
    }
        
       // Success message
    messageDiv.innerHTML = `<div class='alert alert-success'>Welcome, ${name}! You have logged in successfully.</div>`;

    
  });