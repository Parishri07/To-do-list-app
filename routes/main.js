const express = require('express');

const itemList = require('./addItem');

const router = express.Router();

router.get('/', function(req, res, next) {
    const items = itemList.items;
    res.render('home', {
        pageTitle: 'Home page',
        listOfItems: items,
        path: '/'
    });
});

module.exports = router;