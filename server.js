const express = require('express')
const app = express()
const port = 3000

app.use(express.static(__dirname));


app.listen(port, () => {
  console.log(`Torch is running on port ${port}`)
})