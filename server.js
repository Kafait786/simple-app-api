const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
  "21savage": {
    'age': 28,
    'name': 'this this',
    'birthPlace': 'londan england'
  },
  "50 cents": {
    'age': 29,
    'name': 'Slim Shady',
    'birthPlace': 'Los Vegas America'
  },
  "dylan": {
    'age': 23,
    'name': 'dylan',
    'birthPlace': 'Los Vegas USA'
  }
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
  const rappersName = request.params.rapperName.toLowerCase()
  if (rappers[rappersName]) {
    response.json(rappers[rappersName])
  } else {
    response.json(rappers['dylan'])
  }

})

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT} `)
})
