document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    console.log("Email:", email);
    console.log("Password:", password);

    if (email === "admin@gmail.com" && password === "123456") {
        window.location.href = "index.html";
    } else {
        document.getElementById("loginError").textContent =
            "Invalid email or password!";
    }
});
localStorage.setItem("loggedIn", "true");
window.location.href = "index.html";