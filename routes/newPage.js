let express = require('express');
let router = express.Router();

/* Create New Page */
router.get("/", function(req, res, next) {
    console.log("Creating new page...")
    res.render('new');
});

module.exports = router;