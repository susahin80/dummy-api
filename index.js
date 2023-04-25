const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/api", async (req, res) => {

  var {version} = require('./package.json');
  const tasks = [
    { id: 1, text: "todo 1" },
    { id: 2, text: "todo 2" },
    { id: 3, text: "todo 3" },
  ];
  res.send({
    tasks,
    version
  });
});

app.get("/health", async (req, res) => {
  var {version} = require('./package.json');
  res.send({
    version
  });
});

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
