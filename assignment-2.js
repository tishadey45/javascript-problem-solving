function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }
  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamBGoals > teamAGoals) {
    return "Team B Won";
  }

  return "Draw";
}

function isElevatorSafe(weights) {
  if (Array.isArray(weights) === false) {
    return "Invalid";
  }

  let total = 0;
  for (let item of weights) {
    total += item;
  }
  if (total <= 400) {
    return true;
  } else {
    return false;
  }
  return total;
}

function topRatedRestaurant(restaurants) {
  if (!Array.isArray(restaurants) || restaurants.length === 0) {
    return "Invalid";
  }

  let top = restaurants[0];

  for (let finder of restaurants) {
    if (finder.rating > top.rating) {
      top = finder;
    }
  }

  return top.name.toUpperCase();
}

function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  if (tokensUsed <= 500) {
    return 0;
  }
  const extraToken = tokensUsed - 500;

  const extraTokenFloor = Math.floor(extraToken / 100);

  const rate = extraTokenFloor * 5;

  return rate;
}

function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  for (let value of times) {
    if (typeof value !== "number") {
      return "Invalid";
    }
  }

  let total = 0;
  let time = times.length;
  for (let i = 0; i < times.length; i++) {
    total = total + Number(times[i]);
  }

  return total / time;
}
