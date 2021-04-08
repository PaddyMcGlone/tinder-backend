import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import cors from "cors";

// App config
const app = express(); // Create the app
const port = process.env.PORT || 8001; // Listening for requests
const connection_url =
  "mongodb+srv://admin:Pa$$w0rd@cluster0.vxsiw.mongodb.net/tinderdb?retryWrites=true&w=majority";

// Middleware
app.use(express.json());
app.use(cors()); // Adding security headers to every request.

// DB Config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello world");
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/tinder/cards", (req, res) => {
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
