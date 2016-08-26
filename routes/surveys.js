var express = require('express');
var router = express.Router();

var authentication = require('../utils/authentication');
var Models = require('../models');


router.get('/', function (req, res, next) {
    Models.Survey.findAll().then(function (surveys) {
        console.log(surveys);
        res.json(surveys);
    });
});

router.get('/:id', function (req, res, next) {

    var surveyId = req.params.id;
    console.log("surveys.js: surveyn id:"+surveyId);
    Models.Survey.findOne({
        where: {id: surveyId},
        include: {
            model: Models.Person
        }
    }).then(function (survey) {
        console.log("surveys.js: surveyn nimi:"+survey.name);
        res.json(survey);
    });

    //res.send(200);
});

router.get('/:id/del', function (req, res, next) {

    var surveyId = req.params.id;
    return Models.Survey.destroy(
    { where: {id: surveyId}
    }).then(function (rowDeleted) {
          if(rowDeleted === 1){
     console.log("poistettu: "+surveyId);
   }
   res.json(rowDeleted);
    });
});

router.post('/', function (req, res, next) {
    var surveyToAdd = req.body;
    Models.Survey.create({name: surveyToAdd.name, description: surveyToAdd.description}).then(function (survey) {
        console.log(survey.name + ' on lisätty tietokantaan onnistuneesti!');

        res.json(survey);
    });
});

router.post('/:id/person', function (req, res, next) {
    var surveyId = req.params.id;
    var personToAdd = req.body;
    personToAdd.SurveyId = surveyId;
    Models.Person.create({name:personToAdd.name,email: personToAdd.email, phone:personToAdd.phone,surveyid: surveyId} ).then(function (person) {
        console.log(person.id + ' on lisätty tietokantaan onnistuneesti! Tiedonkeruun id: '+surveyId);
        res.json(person);
    });

});

module.exports = router;

