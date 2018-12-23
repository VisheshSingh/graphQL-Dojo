const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//ALLOW CROSS ORIGIN REQUESTS
app.use(cors());

// connect to mLab
mongoose.connect(
  "mongodb://vishesh:test123@ds155293.mlab.com:55293/gql-ninja",
  { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
  console.log("Connected to db...");
});

// MIDDLEWARE
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Server running on port 4000...");
});
