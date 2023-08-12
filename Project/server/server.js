const express = require('express')
const bodyParser = require('body-parser')

const app = express()

var advertisementPlaces = ["TikTok", "Instagram", "Facebook"]

app.get("/ads", (req, res) => {
    res.json({ "advertisementPlaces": advertisementPlaces })
})

app.post("/ads", bodyParser.json(), (req, res) => {
    var advertisementPlace = req.body.advertisementPlace
    console.log(advertisementPlace);
    advertisementPlaces.push(advertisementPlace)
    return res.send("add has been added");
})

app.listen(5000, () => { console.log("server started on port 5000") })