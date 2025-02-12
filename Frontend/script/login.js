document.getElementById("loginForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Megakadályozza az alapértelmezett form elküldést

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert("Sikeres bejelentkezés!");
            window.location.href = "index.html"; // Átirányítás a főoldalra
        } else {
            alert(data.message || "Hibás bejelentkezési adatok!");
        }
    } catch (error) {
        console.error("Hálózati hiba:", error);
        alert("Hálózati hiba történt!");
    }
});
