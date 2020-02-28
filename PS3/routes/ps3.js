const express = require('express');
const router = express.Router(); 

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render("probA", {test: "hello"})
    });

router.post('/',(req,res,next) => {
    console.table(req.body);
    res.render("probB", {
        name: req.body.name,
        length: req.body.name.length
    });
});
module.exports = router;
