function validateForm(){
    const name = document.getElementById("name").value .trim();
    const email = document.getElementById("email").value .trim();
    const password = document.getElementById("password").value.trim();

    document.getElementById("nameError").innerText = '';
    document.getElementById("emailError").innerText = '';
    document.getElementById("passwordError").innerText = '';

    document.getElementById('name').classList.remove('error');
    document.getElementById('email').classList.remove('error');
    document.getElementById('password').classList.remove('error');

    if (!/^[a-zA-Z]+$/.test(name)){
        document.getElementById("nameError").innerText = '';
        document.getElementById('name').classList.add('error');
        console.log(nameError)
        return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        document.getElementById('emailError').innerText = '';
        document.getElementById('email').classList.add('error');
        return false;
    }

    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/.test(password)) {
        document.getElementById('passwordError').innerText = '';
        document.getElementById('password').classList.add('error');
        return false;
    }
    return true;
}
