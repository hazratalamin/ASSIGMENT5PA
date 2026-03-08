function btnLogin() {
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const message = document.getElementById('message');

    
        if (username === "admin" && password === "admin123") {
            message.textContent = "Login Successful!";
            message.className = "text-green-600 text-center mt-4";
        } else {
            message.textContent = "Invalid username or password.";
            message.className = "text-red-600 text-center mt-4";
        }
    }