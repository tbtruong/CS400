const express = require('express');
const router = express.Router(); 
const fetch = require('node-fetch');


/* GET home page. */
router.get('/', async (req, res, next) => {
    const api_url = "https://api.darksky.net/forecast/380fbd76b13314d731a314ee13b83c70/42.3601,71.0589"
    const data = await fetch(api_url);
    const json = await data.json()
    res.render("WeatherRaw", {text: JSON.stringify(json)})
});

module.exports = router;

