// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const port = process.env.PORT || 5000;
// const app = express();
// app.use(express.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.sendFile("./index", { root: __dirname });
// });
// app.get("/api/:id", (req, res) => {
//   let requireddata;
//   let id = req.params.id;
//   fs.readFile("./public/data2.json", (err, data) => {
//     if (err) throw err;
//     const users = JSON.parse(data);
//     requireddata = users.runConcededByTeamInSpecificYear[id];
//     res.send(requireddata);
//   });
// });

// app.listen(port, () => console.log(`listening on port ${port}...`));
