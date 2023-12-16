const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const { v4: uuidv4 } = require("uuid");
const token = uuidv4();
app.use(cors());
const GOOGLE_API_KEY = 'AIzaSyBM3_IkHUdhs1MiUOaF4jGMr6AdReLV534';
app.get("/", async (req, res) => {
    let {data} = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.place}&key=${GOOGLE_API_KEY}&sessiontoken=${token}`
    );
    res.json(data);
  });

  app.get("/geocode", async (req, res) => {
    let {data} = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.place}&key=${GOOGLE_API_KEY}`
    );
    res.json(data);
  });

app.listen(process.env.PORT || 4000);