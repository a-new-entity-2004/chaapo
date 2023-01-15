alert("The Password that you have entered is incorrect, Please enter the correct Password")
async function login() {
    document.getElementById("loginbox").style.display = "block";
    document.getElementById("signupbox").style.display = "none";
}

async function signup() {
    document.getElementById("signupbox").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
}