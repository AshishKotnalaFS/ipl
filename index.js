const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchWonByTeamOverAllYear = require("./ipl/matchWonByTeamOverAllYear");
const runConcededByTeamIn2016 = require("./ipl/runConcededByTeamIn2016");
const tenBestEcnomicBowler = require("./ipl/tenBestEcnomicBowler");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  let result1;
  let result2;
  let result3;
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then((matches) => {
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then((deliveries) => {
          //here all the value are of json data is present in string from even numbers are in string form.
          result1 = matchesPlayedPerYear(matches);
          result2 = matchWonByTeamOverAllYear(matches);
          result3 = runConcededByTeamIn2016(deliveries, matches);
          result4 = tenBestEcnomicBowler(deliveries, matches);

          saveMatches(result1, result2, result3);
        });
    });
}
function saveMatches(result1, result2, result3) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    matchWonByTeamOverAllYear: result2,
    runConcededByTeamIn2016: result3,
    tenBestEcnomicBowler: result4,
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", (err) => {
    if (err) {
      console.error(err);
    }
  });
}
main();
