const express = require('express')
const app = express()
const port = 4000

app.get('/userinfos', (request, response) => {
  response.set("Access-Control-Allow-Origin","*");
  response.send({
    signedupUsers: [
      "Camille",
      "Roger"
    ]
  })
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
