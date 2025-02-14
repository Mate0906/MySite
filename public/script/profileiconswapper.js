document.addEventListener('DOMContentLoaded', function () {
    fetch('/user')
        .then(response => response.json())
        .then(data => {
            if (data.loggedIn) {
                // Ha be van jelentkezve:
                document.getElementById('login-link').style.display = 'none'; // Login gomb eltüntetése
                document.getElementById('profile-btn').style.display = 'block'; // Profile gomb megjelenítése
            } else {
                // Ha nincs bejelentkezve:
                document.getElementById('login-link').style.display = 'block'; // Login gomb megjelenítése
                document.getElementById('profile-btn').style.display = 'none'; // Profile gomb eltüntetése
            }
        })
        .catch(error => console.error('Error fetching user data:', error));
});
