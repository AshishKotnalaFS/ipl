function matchIdWhichHeldOn2015(data1) {
  let idOf2015Matches = [];
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].season == 2015) {
      idOf2015Matches.push(data1[i].id);
    }
  }
  return idOf2015Matches;
}

function BowlerNames(data1) {
  let unique = [];
  for (let i = 0; i < data1.length; i++) {
    unique = [...new Set(data1.map((item) => item.bowler))];
  }
  return unique;
}

function tenBestEcnomicBowler(data1, data2) {
  let result = {};
  let idArray = matchIdWhichHeldOn2015(data2); //this whill array contain ids of all matches that held in2016 in increasing order

  let requiredMatch = data1.filter((item) => {
    if (idArray.includes(item.match_id)) {
      return true;
    }
  });

  let trackEconomy = [];
  let bowlers = BowlerNames(requiredMatch);
  for (let i = 0; i < bowlers.length; i++) {
    let sumRuns = 0;
    let sumBalls = 0;
    // let economyRate = 0;
    for (let j = 0; j < requiredMatch.length; j++) {
      const {
        total_runs,
        ball,
        is_super_over,
        bowler,
        bye_runs,
        legbye_runs,
        noball_runs,
        penalty_runs,
        wide_runs,
        extra_runs,
        bowling_team,
      } = requiredMatch[j];
      if (bowlers[i] === bowler) {
        sumRuns += +total_runs - (+legbye_runs + +bye_runs + +penalty_runs);
        if (requiredMatch[j].ball <= 6) {
          sumBalls++;
        }
      }
    }
    let overs = sumBalls / 6;
    let economy = sumRuns / overs;
    trackEconomy.push([bowlers[i], economy]);
  }
  trackEconomy.sort((a, b) => {
    return a[1] - b[1];
  });
  trackEconomy = trackEconomy.slice(0, 10);
  for (let j = 0; j < trackEconomy.length; j++) {
    result[trackEconomy[j][0]] = trackEconomy[j][1];
  }
  return result;
}
module.exports = tenBestEcnomicBowler;
