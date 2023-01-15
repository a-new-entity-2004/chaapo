alert("The Email-ID that you have entered does not exist in our database, please check your Email-ID again or Sign-Up as a new user")
async function login() {
    document.getElementById("loginbox").style.display = "block";
    document.getElementById("signupbox").style.display = "none";
}

async function signup() {
    document.getElementById("signupbox").style.display = "block";
    document.getElementById("loginbox").style.display = "none";
} 
// this is me