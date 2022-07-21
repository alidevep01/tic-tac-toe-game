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
