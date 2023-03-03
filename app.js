const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars')
const getHandler = require('./routes/getRoute')


const app = express();
const port = process.env.PORT || 3000;


// create view engine
app.engine('handlebars', expressHandlebars.engine({
        defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')

// configure static files
const publicPath = path.join(__dirname, '/public')
app.use(express.static(publicPath))

app.get('/', getHandler.getHome)
app.get('/about', getHandler.getAbout)


// custom 404 page
app.use((req, res) => {
    res.status(404)
    res.render('404');
})

// custon 500 page
app.use((err, req, res, next) => {
    console.log(err.message)
    res.status(500)
    res.render('500');
})

app.listen(port, function(){
    console.log(`Express started on http://localhost:${port}; ` + 
    'press Ctr-C to terminate...')
})