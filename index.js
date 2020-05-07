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
     console.log(data, 'data')
    res.json(data);
  });

app.listen(process.env.PORT || 5000);