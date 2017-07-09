console.log('made it to app.js')
debugger
const express = require('express')
const app = express()
debugger
const search = require("./scripts/meetupAPI")
// const ejs = require('ejs')

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

app.get('/authd', function (err, req, res) {

  if (err){
    console.log(err)
  }
  console.log(req.path)
  //let token = req.originalUrl.split("access_token=")[1].split("&")[0]

  //let token = window.location.hash.split("access_token=")[1].split("&")[0]
  //var result = search.findGroupByTerms('RUBY')
  var result = "temporary test string"
  res.render('authd', {result})
  //res.render('authd')
})

app.listen(process.env.PORT || 3333, function(){
  console.log('server is running!')
})
