/*  positionNo
   A   B    C
a|  1 | 2  | 3  |
b|  4 | 5  | 6  |
c|  7 | 8  | 9  | 
*/
//ticTacToe win possibilities
// 1.- 1, 2, 3
// 2.- 1, 4, 7
// 3.- 1, 5, 9
// 4.- 2, 5, 8
// 5.- 3, 5, 7
// 6.- 3, 6, 9
// 7.- 4, 5, 6
// 8.- 7, 8, 9

//win logic
//if (1==2==3)=(x||o)         then that player wins
//  else if((4==5==6)=(x||o)) then that player wins
//  else if((7==8==9)=(x||o)) then that player wins
//  else if((1==4==7)=(x||o)) then that player wins
//  else if((2==5==8)=(x||o)) then that player wins
//  else if((3==6==9)=(x||o)) then that player wins
//  else if((1==5==9)=(x||o)) then that player wins
//  else if((3==5==7)=(x||o)) then that player wins
//  else DRAW

//DOM elements
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const draw = document.querySelector(".draw");
const gameGrid = document.querySelector(".gameGrid"); //parentGrid
const grid = document.querySelector(".grid");
const modal1 = document.querySelector(".modal1");
const modal2 = document.querySelector(".modal2");
const span = document.getElementsByClassName("close")[0];
const player1Btn = document.getElementById("player1Btn");
const player2Btn = document.getElementById("player2Btn");
const player1x = document.getElementById("player1X");
const player1o = document.getElementById("player1O");
let player1Score = 0;
let player2Score = 0;
let drawScore = 0;

//game variables

//modal
//onpageload display modal
document.addEventListener("DOMContentLoaded", () => {
  //player1 modal
  modal1.style.display = "block";
  player1Btn.onclick = () => {
    let player1Input = document.querySelector(".player1Input").value;
    document.querySelector(".player1Name").innerText = player1Input;
    modal1.style.display = "none";
    modal2.style.display = "block";
  };
  //player2 modal
  player2Btn.onclick = () => {
    let player2Input = document.querySelector(".player2Input").value;
    document.querySelector(".player2Name").innerText = player2Input;
    modal2.style.display = "none";
  };
});

//onClick X close modal
span.onclick = () => {
  modal1.style.display = "none";
  modal2.style.display = "none";
};

//onClick anywhere outside modal, close it
window.onclick = (event) => {
  if (event.target == modal1 || event.target == modal2) {
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
};

//player1 Weapon select
player1x.onclick = () => {
  const player1valuex = player1x.innerText;
  const a = (document.querySelector(".player1Weapon").innerText =
    player1valuex);
  document.querySelector(".player2Weapon").innerText = "O";
  document.querySelector(".playerweapon").innerText = "O";
  player1x.style.background = "green";
  player1o.style.background = "black";
};
player1o.onclick = () => {
  const player1valueo = player1o.innerText;
  const b = (document.querySelector(".player1Weapon").innerText =
    player1valueo);
  document.querySelector(".player2Weapon").innerText = "X";
  document.querySelector(".playerweapon").innerText = "X";
  player1x.style.background = "black";
  player1o.style.background = "green";
};
