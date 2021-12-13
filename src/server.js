const app = require("./index");
const connect = require("./configs/db");

app.listen(4300, async function () {
  await connect();
  console.log("listening on port 4300");
});















/////           ye hai evaluation ka file


