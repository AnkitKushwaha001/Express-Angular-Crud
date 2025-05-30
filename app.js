// npm init -y
// npm i express
// npm i dotenv cors
// npm i mongoose
// npm i nodemon

const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const userRoutes = require("./routes/user-routes");
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('running')
});

app.use(userRoutes);

async function connectDb() {
  await mongoose.connect("mongodb://localhost:27017", {
    dbName: "Testing1"
  });
}

connectDb().catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})