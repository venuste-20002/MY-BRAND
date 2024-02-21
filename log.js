function validateForm() {
    const name = document.getElementById("name").value.trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("nameError").innerText = '';
    document.getElementById("passwordError").innerText = '';

    document.getElementById("name").classList.remove('error');
    document.getElementById("password").classList.remove('error');


    // Validate email (name)
    if (!/\S+@\S+\.\S+/.test(name)) {
        document.getElementById('nameError').innerText = '';
        document.getElementById('name').classList.add('error'); // Add error class
        return false;
    }

    // Validate password
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/.test(password)) {
        document.getElementById('passwordError').innerText = '';
        document.getElementById('password').classList.add('error');
        return false;
    }

    return true;
}

