import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";

// App config
const app = express(); // Create the app
const port = process.env.PORT || 8001; // Listening for requests
const connection_url =
  "mongodb+srv://admin:Pa$$w0rd@cluster0.vxsiw.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middleware

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello world"));

app.get("/tinder/card", (req, res) => {
  Cards.find(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/tinder/card", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
