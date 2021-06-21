let user_message = sessionStorage.getItem("message");
let user_score = sessionStorage.getItem("score");
let user_time = sessionStorage.getItem("time");
document.querySelector("span.message").innerHTML = user_message;
document.querySelector("span.score").innerHTML = user_score;
document.querySelector("span.timetaken").innerHTML = user_time;

