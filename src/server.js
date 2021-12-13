const app = require("./index");
const connect = require("./configs/db");

app.listen(9898, async function () {
  await connect();
  console.log("listening on port 9898");
});
