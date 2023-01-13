alert("The E-Mail ID you have entered already exists in our DataBase. Kindly Log-In or use a different E-Mail ID")
async function login() {
    document.getElementById("loginbox").style.display = "block";
    document.getElementById("signupbox").style.display = "none";
}

async function signup() {
    document.getElementById("signupbox").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
} 