const express = require('express');

const router = express.Router();

const listOfItems = [];

router.get('/addItem', function (req, res, send) {
    res.render('addItem', {
        pageTitle: 'Add work to the to-do list',
        path: '/addItem'
    });
})

router.post('/addItem', function (req, res, next) {
    listOfItems.push({ title: req.body.list_item });
    res.redirect('/');
});

exports.routes = router;
exports.items = listOfItems;