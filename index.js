const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchWonByTeamOverAllYear = require("./ipl/matchWonByTeamOverAllYear");
const runConcededByTeamIn2016 = require("./ipl/runConcededByTeamIn2016");
const tenBestEcnomicBowler = require("./ipl/tenBestEcnomicBowler");
const matchWonByEachTeamPerVenue = require("./ipl/matchWonByEachTeamPerVenue");
const runConcededByTeamInSpecificYear = require("./ipl/runConcededByTeamInSpecificYear");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";
const JSON_OUTPUT_FILE_PATH_TWO = "./public/data2.json";
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.get("/api/:id", (req, res) => {
  let requireddata;
  let id = req.params.id;
  fs.readFile("./public/data2.json", (err, data) => {
    if (err) throw err;
    const users = JSON.parse(data);
    requireddata = users.runConcededByTeamInSpecificYear[id];
    res.send(requireddata);
  });
});
const port = process.env.Port || 8080;
app.listen(port, () => console.log(`listening on port ${port}...`));
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
          result5 = matchWonByEachTeamPerVenue(matches);
          result6 = runConcededByTeamInSpecificYear(deliveries, matches);

          saveMatches(result1, result2, result3, result4, result5, result6);
        });
    });
}
function saveMatches(result1, result2, result3, result4, result5) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    matchWonByTeamOverAllYear: result2,
    runConcededByTeamIn2016: result3,
    tenBestEcnomicBowler: result4,
    matchWonByEachTeamPerVenue: result5,
  };
  const jsonData2 = {
    runConcededByTeamInSpecificYear: result6,
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", (err) => {
    if (err) {
      console.error(err);
    }
  });
  const jsonString2 = JSON.stringify(jsonData2);
  fs.writeFile(JSON_OUTPUT_FILE_PATH_TWO, jsonString2, "utf8", (err) => {
    if (err) {
      console.error(err);
    }
  });
}
main();
