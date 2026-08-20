function matchWinner(teamAGoals, teamBGoals) {
  // Write your code here…
  // console.log(teamAGoals,teamBGoals);
  if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
    return "Invalid"
  }
  if(teamAGoals > teamBGoals){
    return "Team A Won" ;
  }else if(teamBGoals > teamAGoals){
    return "Team B Won";
  }
  // return teamAGoals;
  // return teamBGoals
  return 'Draw';
}

// const win = 2,1;
// const result = matchWinner(2,1);
// console.log(result);

// const win = matchWinner(1, 3);
// console.log(win)

// const win = matchWinner(2, 2);
// console.log(win)

const win = matchWinner("3", 2);
console.log(win)