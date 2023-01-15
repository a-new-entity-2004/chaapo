
function play () {
let typearr = ["the chosen category is MOVIES 😁","the chosen category is ANIME 😍","the chosen category is PROF_name 😢","the chosen category is SPORTS 🏅" ];

let categarr = ["INCEPTION","NARUTO","PPROY","VOLLEYBALL"];

let hintarr = ["go to sleep","never-give-up","do-you-follow","the ball goes volley-holley"];
// ------------------------------------------- THE ARRAYS ------------------------------

let category = Math.floor(Math.random()*4);
document.querySelector(".category").textContent = typearr[category];

let hint_key = document.querySelector(".hint");

hint_key.addEventListener("click", () => {
    document.querySelector(".clue").textContent = `CLUE <--> ${hintarr[category]}`;
});

let number_of_words = document.querySelector(".guess");

let answer = "";

let hidden_answer = categarr[category];

let len = hidden_answer.length;

for (let i = 0; i < len;i++) {
    answer += "_ ";
}

number_of_words.innerHTML = answer;

document.querySelector(".lives").innerHTML = "You have 10 lives";

let count = 10;

let countcheck = 0;

const alphakey = Array.from(document.querySelectorAll(".alphabets"));
alphakey.forEach(element => {
    element.addEventListener("click", () => {
        let data = element.innerHTML;
        let ans = false;
        let checkarr = hidden_answer.split("");
        for(let i = 0; i < len;i++) {
            if (data == checkarr[i]) {
                checkarr[i] = 0;
                hidden_answer = checkarr.join("");
                let answerarr = answer.split("");
                let index = i+i;
                answerarr[index] = data;
                answer = answerarr.join("");
                number_of_words.innerHTML = answer;
                ans = true;
                countcheck++;
                break;
            }
        }
        if (countcheck == len) {
            document.querySelector(".lives").innerHTML = "CONGRATULATIONS, YOU HAVE WON THE GAME 🥇";
        }
        if (ans == false) {
            count = count - 1;
            document.querySelector(".lives").innerHTML = `you have ${count} lives`;
            drawArray[count]();
        }
        if (count == 0) {
            document.querySelector(".lives").innerHTML = "SORRY, YOU HAVE LOST THE GAME 😢";
        }
    })
});

myStickman = document.getElementById("draw-figure");
context = myStickman.getContext('2d');

head = function(){
    context.beginPath();
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();
}

draw = function(pathFromx, pathFromy, pathTox, pathToy) {
  context.moveTo(pathFromx, pathFromy);
  context.lineTo(pathTox, pathToy);
  context.stroke(); 
}

frame1 = function() {
   draw (0, 150, 150, 150);
};

 frame2 = function() {
   draw (10, 0, 10, 600);
 };

 frame3 = function() {
   draw (0, 5, 70, 5);
 };

 frame4 = function() {
   draw (60, 5, 60, 15);
 };

 torso = function() {
   draw (60, 36, 60, 70);
 };

 rightArm = function() {
   draw (60, 46, 100, 50);
 };

 leftArm = function() {
   draw (60, 46, 20, 50);
 };

 rightLeg = function() {
   draw (60, 70, 100, 100);
 };

 leftLeg = function() {
   draw (60, 70, 20, 100);
 };

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 

}

play();

let reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
    context.clearRect(0,0,400,400);
    count = 0;
    countcheck = 0;
    play();
})
