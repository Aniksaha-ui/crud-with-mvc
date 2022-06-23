const app = require("./index");
const PORT = 4000;

const dotenv = require("dotenv");
dotenv.config({ path: "/config/config.env" });
app.listen(PORT, () => {
  console.log("server started at port :" + PORT);
});
