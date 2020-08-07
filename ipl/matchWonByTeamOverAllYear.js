function teamNames(data1) {
  let unique = [];
  for (let i = 0; i < data1.length; i++) {
    unique = [...new Set(data1.map((item) => item.team1))];
  }
  return unique;
}
function uniqueSeasons(data1) {
  let unique = [];
  for (let i = 0; i < data1.length; i++) {
    unique = [...new Set(data1.map((item) => item.season))];
  }
  return unique;
}

function matchWonByTeamOverAllYear(data1) {
  let teams = teamNames(data1);
  let numberOfMatchWonByEachTeamAllTm = {};
  for (let i = 0; i < teams.length; i++) {
    let temp = new Array(uniqueSeasons(data1).length).fill(0);
    for (let j = 0; j < data1.length; j++) {
      if (teams[i] === data1[j].winner) {
        temp[data1[j].season - 2008]++;
      }
    }
    numberOfMatchWonByEachTeamAllTm[teams[i]] = temp;
  }
  return numberOfMatchWonByEachTeamAllTm;
}
module.exports = matchWonByTeamOverAllYear;
