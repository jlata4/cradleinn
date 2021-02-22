const path = require('path')
const express = require('express')
const hbs = require('hbs')
const chalk = require('chalk')
//const $ = require('jquery-jsdom')


const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')
const bootstrapCss = path.join(__dirname,'../node_modules/bootstrap/dist/css')
const bootstrapJs = path.join(__dirname,'../node_modules/bootstrap/dist/js')
const jquery = path.join(__dirname, '../node_modules/jquery/dist')
const popper = path.join(__dirname, '../node_modules/popper.js/dist')

app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))
app.use('/bootstrapCss',express.static(bootstrapCss))
app.use('/bootstrapJs',express.static(bootstrapJs))
app.use('/jquery',express.static(jquery))
app.use('/popper',express.static(popper))

app.get('',(req,res)=> {
    res.render('index', {
        author: 'Juhi Lata',
        created: '02/19/2021'
    })
})

app.get('*',(req,res) => {
    res.render('error', {
        title: 'ERROR PAGE',
        message: 'Page not found',
        author: 'Juhi Lata'
    })
})

app.listen(port, () => {
    console.log('Server is up on Port ' + port)
})

