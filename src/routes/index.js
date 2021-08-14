const route = require('express').Router()

route.get('/', (req, res) => {
    res.render('./layouts/principal.hbs')
})

module.exports = route