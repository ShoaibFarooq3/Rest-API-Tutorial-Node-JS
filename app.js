const express = require("express");
const studentRoute = require("./api/routes/student");
const facultyRoute = require("./api/routes/faculty");
const productRoute = require("./api/routes/product");
const userRoute = require("./api/routes/user");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const app = express();

mongoose.connect("dfsdfsdf");
mongoose.connection.on("error", (err) => {
  console.log("Connection failed");
});
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/students", studentRoute);
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/faculty", facultyRoute);
app.use((req, res, next) => {
  res.status(404).json({
    error: "URL does not exists",
  });
});
mongoose.connection.on("connected", (connected) => {
  console.log("Database is connected");
});
module.exports = app;
