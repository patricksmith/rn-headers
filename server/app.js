const express = require('express')
const app = express()

app.get('/', (req, res) => {
  const { page = 1 } = req.query
  const next = parseInt(page) + 1
  const last = 42
  res.append('Link', `${req.protocol}:\\\\${req.hostname}${req.originalUrl}; rel="self"`)
  res.append('Link', `${req.protocol}:\\\\${req.hostname}${req.path}?page=${next}; rel="next"`)
  res.append('Link', `${req.protocol}:\\\\${req.hostname}${req.path}?page=${last}; rel="last"`)
  res.send(`Here's page ${page}!`)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
