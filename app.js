const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();

const homePageRoutes = require('./routes/main');
const additemRoutes = require('./routes/addItem');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false }));

app.use(homePageRoutes);
app.use(additemRoutes.routes);

app.use(function(req, res, next){
    res.status(404).render('404', {
        pageTitle: 'Page Not Found',
        path:''
    })
})

app.listen(3000);