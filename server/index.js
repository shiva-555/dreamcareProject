const express = require('express');
const bodyParser = require('body-parser');
const route = require('./Router/route.js');
const  mongoose  = require('mongoose');
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017"
    , {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

const accountSid = "AC5adc0d4282cd76e8e481de20812eaf44";
const authToken = "c5b516ff9a123236bd5d8c09a66882b8";
const client = require("twilio")(accountSid, authToken);



app.get("/otp", (req, res) => {
  client.messages
  .create({
    body: `${Math.floor(Math.random() * 900000) + 100000}`,
    from: "+18155970969",
    to: "+91" + req.query.number,
  })
  .then(() => res.status(200).json({ messages: "sent successfully" }))
  .catch((e) => console.log(e));
});


app.listen(5000, function () {
    console.log('Express app running on port ' + 5000)
});
