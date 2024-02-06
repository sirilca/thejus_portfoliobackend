const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bodyparser = require("body-parser")
const http = require("http")
const app = express()

const httpserver=http.createServer(app)
app.use(bodyparser.json());
app.use(cors());
const mailrouter = require('../Project_backend/mailsection/contactmail')
// mongoose.connect("mongodb://localhost/newone").then(() => console.log("mongoose connected"))
mongoose.connect("mongodb+srv://thejusjoseph:dwMMlpOhly7HFKgx@cluster0.2mkkvws.mongodb.net/test?retryWrites=true&w=majority").then(() => console.log("mongoose connected"))
const DataModel=mongoose.model('data',{})

app.use('/', mailrouter)

app.get('/', async (req, res) => {
    const alldata = await DataModel.find()
    res.json(alldata)
})

httpserver.listen(443, () => { console.log("server started") })