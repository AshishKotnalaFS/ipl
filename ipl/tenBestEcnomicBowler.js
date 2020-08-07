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
    if (
      item.match_id >= idArray[0] &&
      item.match_id <= idArray[idArray.length - 1]
    ) {
      return true;
    }
  });

  let trackEconomy = [];
  let bowlers = BowlerNames(requiredMatch);
  // console.log(bowlers, "bowlers");
  for (let i = 0; i < bowlers.length; i++) {
    let sumRuns = 0;
    let sunBalls = 0;
    // let economyRate = 0;

    for (let j = 0; j < requiredMatch.length; j++) {
      const { total_runs, ball, bowler } = requiredMatch[j];
      if (bowlers[i] === bowler) {
        sumRuns += +total_runs;
        sunBalls += +ball;
      }
    }
    let overs = sunBalls / 6;
    trackEconomy.push(sumRuns / overs);
    result[bowlers[i]] = sumRuns / overs;
  }
  // console.log(result);
  return result;
}
module.exports = tenBestEcnomicBowler;
