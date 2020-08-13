function matchIdWhichHeldOnSpecificYear(data1, year) {
  let idOfMatches = [];
  for (let i = 0; i < data1.length; i++) {
    if (data1[i].season == year) {
      //this value is to change by the value got from user
      idOfMatches.push(data1[i].id);
    }
  }
  return idOfMatches;
}
function teamNames(data1) {
  let unique = [];
  for (let i = 0; i < data1.length; i++) {
    unique = [...new Set(data1.map((item) => item.team1))];
  }
  return unique;
}
function runConcededByTeamInSpecificYear(data1, data2) {
  finalResult = {};
  for (let year = 2008; year <= 2019; year++) {
    let result = {};
    let idArray = matchIdWhichHeldOnSpecificYear(data2, year); //this whill array contain ids of all matches that held in2016 in increasing order
    let requiredMatch = data1.filter((item) => {
      if (idArray.includes(item.match_id)) {
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
            +bye_runs +
            +legbye_runs +
            +noball_runs +
            +penalty_runs +
            +wide_runs;
        }
      }
      if (sum > 0) {
        result[teams[i]] = sum;
      }
    }
    finalResult[year] = result;
  }
  return finalResult;
}
module.exports = runConcededByTeamInSpecificYear;
