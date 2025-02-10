// Get the login form elements
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

// Handle form submission
loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission from reloading the page

    const email = emailInput.value;
    const password = passwordInput.value;

    // Send the login data to the server
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.message === "Login successful!") {
            // If login is successful, redirect to the main page
            window.location.href = "index.html"; // Change to your main page if needed
        } else {
            alert("Invalid email or password");
        }
    })
    .catch(error => console.error("Error:", error));
});
