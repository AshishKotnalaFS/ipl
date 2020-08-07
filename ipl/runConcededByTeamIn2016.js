function matchIdWhichHeldOn2016(data1) {
  let idOf2016Matches = [];
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].season == 2016) {
      idOf2016Matches.push(data1[i].id);
    }
  }
  return idOf2016Matches;
}

function teamNames(data1) {
  let unique = [];
  for (let i = 0; i < data1.length; i++) {
    unique = [...new Set(data1.map((item) => item.team1))];
  }
  return unique;
}
function runConcededByTeamIn2016(data1, data2) {
  let result = {};
  let idArray = matchIdWhichHeldOn2016(data2); //this whill array contain ids of all matches that held in2016 in increasing order
  let requiredMatch = data1.filter((item) => {
    if (
      item.match_id >= idArray[0] &&
      item.match_id <= idArray[idArray.length - 1]
    ) {
      return true;
    }
  });
  let teams = teamNames(data2);

  for (let i = 0; i < teams.length; i++) {
    let sum = 0;
    for (let j = 0; j < requiredMatch.length; j++) {
      const {
        bye_runs,
        legbye_runs,
        noball_runs,
        penalty_runs,
        wide_runs,
        bowling_team,
      } = requiredMatch[j];
      if (teams[i] === bowling_team) {
        sum +=
          +bye_runs + +legbye_runs + +noball_runs + +penalty_runs + +wide_runs;
      }
    }
    if (sum > 0) {
      result[teams[i]] = sum;
    }
  }

  return result;
}
module.exports = runConcededByTeamIn2016;
