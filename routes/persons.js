var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');


router.get('/:id', function (req, res, next) {

    var personId = req.params.id;
    Models.Person.findOne(
    { where: {id: personId},
    }).then(function (person) {
        console.log(person);
        res.json(person);
    });
});

router.get('/:id/del', function (req, res, next) {

    var personId = req.params.id;
    return Models.Person.destroy(
    { where: {id: personId}
    }).then(function (rowDeleted) {
          if(rowDeleted === 1){
     console.log("poistettu: "+personId);
   }
   res.json(rowDeleted);
    });
});

module.exports = router;