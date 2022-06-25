const express = require("express");
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const Ragister = require("./NetflixData/Ragister");

// const config = require('config');
// console.log(config)

const app = express();
app.use(bodyParser.json({ extended: false }))
app.use(cors())


// mongoose.connect('mongodb://localhost:27017/Netflix')
const DATABASE = 'mongodb+srv://whatsapp:7euPB782SLtov0zU@cluster0.jnuxr.mongodb.net/Netflix?retryWrites=true&w=majority'
// const DB = process.env.DATABASE
// const connection_url = DB
// console.log(connection_url)

mongoose.connect(DATABASE, {
  useNewUrlParser: true
}).then((result) => {
  console.log("connection successful")
}).catch((err) => {
  console.log("no connection", err)
});

// Ragister API
app.post('/ragister', (req, res) => {
  let { email, password, firstName, lastName, cardNumber, date, cvv, plan, price } = req.body
  bcrypt.hash(password, 10)
    .then((bypas) => {
      let ragister = new Ragister({
        email, password: bypas, firstName, lastName, cardNumber, date, cvv, plan, price
      })
      ragister.save()
        .then((result) => {
          res.send({ status: "OK", msg: result })
        }).catch((err) => {
          res.send({ status: "Internet Problem" })
          console.log(err)
        });
    })
    .catch(err => { console.log(err) })
})

// Login API 
app.post('/get-ragister', (req, res) => {
  let { email, password } = req.body
  Ragister.find({ email })
    .then(result => {
      bcrypt.compare(password, result[0].password)
        .then((compass) => {
          if (compass) {
            res.send({ status: "Founded", msg: result[0] })
          } else {
            res.send({ status: "invalid email and password" })
          }
        }).catch((err) => {
          console.log(err)
        })
    })
    .catch(err => {
      res.send({ status: "Network Problem", msg: err })
    })
})

app.post('/get-user-name', (req, res) => {
  const { _id } = req.body
  Ragister.findById(_id)
    .then((result) => {
      res.send({ status: "OK", getInfo: result })
    }).catch((err) => {
      console.log(err)
    });
})

app.post('/get-user-info-account', (req, res) => {
  const { _id } = req.body
  Ragister.findById(_id)
    .then((result) => {
      res.send({ status: "Ok", infouser: result })
    }).catch((err) => {
      console.log(err)
    });
})

app.post('/get-update-email', (req, res) => {
  const { _id, email } = req.body
  if (email.length > 0) {
    Ragister.findByIdAndUpdate(_id, { email })
      .then((result) => {
        res.send({ status: "Updated", data: result })
      }).catch((err) => {
        console.log(err)
      });
  } else {
    res.send({ status: "Not Found", msg: "email is not found" })
  }
})


// heroku term

if (process.env.NODE_ENV == "production") {
  app.use(express.static("netflixC/build"))
}

app.listen(port, () => {
  console.log(`localhost://127.0.0.1:${port} is Running....`)
})