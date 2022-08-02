let scoreHome = 0;
let scoreAway = 0;
let homeBoard = document.getElementById("home-board");
let awayBoard = document.getElementById("away-board");

function plusOneHome() {
    scoreHome += 1;
    homeBoard.innerHTML = scoreHome;
}
function plusTwoHome() {
    scoreHome += 2;
    homeBoard.innerHTML = scoreHome;
}
function plusThreeHome() {
    scoreHome += 3;
    homeBoard.innerHTML = scoreHome;
}
function resetHome() {
    scoreHome = 0;
    homeBoard.innerHTML = scoreHome;
}

function plusOneAway() {
    scoreAway += 1;
    awayBoard.innerHTML = scoreAway;
}
function plusTwoAway() {
    scoreAway += 2;
    awayBoard.innerHTML = scoreAway;
}
function plusThreeAway() {
    scoreAway += 3;
    awayBoard.innerHTML = scoreAway;
}
function resetAway() {
    scoreAway = 0;
    awayBoard.innerHTML = scoreAway;
}