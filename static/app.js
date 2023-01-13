async function login() {
    document.getElementById("loginbox").style.display = "block";
    document.getElementById("signupbox").style.display = "none";
    // await axios.get('/login');
}

async function signup() {
    document.getElementById("signupbox").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
    // await axios.get('/signup');
}