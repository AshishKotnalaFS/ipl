const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchWonByTeamOverAllYear = require("./ipl/matchWonByTeamOverAllYear");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then((matches) => {
      let result = matchesPlayedPerYear(matches);
      let result2 = matchWonByTeamOverAllYear(matches);
      saveMatches(result, result2);
    });
}

function saveMatches(result, result2) {
  const jsonData = {
    matchesPlayedPerYear: result,
    matchWonByTeamOverAllYear: result2,
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", (err) => {
    if (err) {
      console.error(err);
    }
  });
}

main();
