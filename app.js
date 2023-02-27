const express = require('express');


const app = express();
const port = process.env.PORT || 3000;


// custom 404 page
app.use((req, res) => {
    res.type('text/plain');
    res.status(404)
    res.send('404 - Not Found');
})

// custon 500 page
app.use((err, req, res, next) => {
    console.log(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Server Error');
})

app.listen(port, function(){
    console.log(`Express started on http://localhost:${port}; ` + 
    'press Ctr-C to terminate...')
})