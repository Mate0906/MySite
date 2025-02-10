// Get the registration form elements
const registerForm = document.getElementById("registerForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Handle form submission
registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission from reloading the page

    const email = emailInput.value;
    const password = passwordInput.value;

    // Send the registration data to the server
    fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => {
        if (response.ok) {
            // If registration is successful, redirect to the login page
            window.location.href = "login.html";
        } else {
            alert("Registration failed. The email might already be taken.");
        }
    })
    .catch(error => console.error("Error:", error));
});
