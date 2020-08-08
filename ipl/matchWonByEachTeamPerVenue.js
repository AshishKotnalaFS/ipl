function teamNames(data1) {
  let unique = [];
  for (let i = 0; i < data1.length; i++) {
    unique = [...new Set(data1.map((item) => item.team1))];
  }
  return unique;
}
function venueNames(data1) {
  let unique = [];
  for (let i = 0; i < data1.length; i++) {
    unique = [...new Set(data1.map((item) => item.venue))];
  }
  return unique;
}

function matchWonByEachTeamPerVenue(matches) {
  let teamName = Array.from(new Set(teamNames(matches)));
  let venueName = Array.from(new Set(venueNames(matches)));
  let l1 = venueName.length;
  let result = {};
  for (let i = 0; i < teamName.length; i++) {
    let tempArray = new Array(l1).fill(0);
    let temp = {};
    for (let j = 0; j < matches.length; j++) {
      if (teamName[i] === matches[j].winner) {
        let index = venueName.indexOf(matches[j].venue);
        tempArray[index]++;
      }
    }
    result[teamName[i]] = tempArray;
  }
  return result;
}

module.exports = matchWonByEachTeamPerVenue;
