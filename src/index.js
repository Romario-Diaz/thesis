const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

// middlewares
app.use(express.urlencoded({extended: false}))


// routes

app.use(require('./routes/index'))

app.listen(app.get('port'), () => {
    console.log("Server listen on port", app.get('port'))
})