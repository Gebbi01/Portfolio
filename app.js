const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Settingan buat manggil file dari direktori lain
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + ('public/img')))

// Settingan views
app.set('views', './src/views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
    res.render('index')
})














app.listen(PORT, () => {
    console.log('server berhasil berjalan di port 8080!')
})