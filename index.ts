import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

import {generateHealthProfiles, getNumberOfOverweightPeoples} from "./libs/calculator"

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/bmicalc", (req, res) => {
  if (!req.query.url) {
    res.status(200).send("URL Query Parameter missing");
    return;
  }

  const { url } = req.query;

  axios
    .get(url as string)
    .then((response) => {
      const result = generateHealthProfiles(response.data);
      const numberOfOverweightPeoples = getNumberOfOverweightPeoples(result);

      res.status(200).json({
        result, stats : {
          numberOfOverweightPeoples
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({
        error: "There seems to be some issue with the provided url. Please check and try again."
      })
    });
});

app.get("/", (req, res) => {
  res.status(400);
  res.json({
    message: "Welcome to BMI Calculator",
  });
});

app.listen(process.env.PORT || 3000, () =>
  console.log(
    `Server Ready at [Development Only]: ${
      process.env.PORT
        ? "https://localhost:" + process.env.PORT
        : "https://localhost:3000"
    }`
  )
);

export default app;
