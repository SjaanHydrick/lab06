const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hard', (req, res) => {
    res.send('whooman is this going to be a tough week.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})