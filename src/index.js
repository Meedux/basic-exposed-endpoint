import words from './db/words.json' assert {type: 'json'}
import express from 'express'

const app = express()
const port = 6969

app.get('/', (req, res) => {

    res.json(words)
    console.log(words)
})

app.get('/random-word', (req, res) => {
    const randomWord = Math.floor(Math.random() * words.word.length + 1);

    res.send(words.word[randomWord])
})

app.listen(port, () => {
    console.log(`App Listening on Port ${port}`)
})