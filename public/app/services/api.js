SurveyApp.service('Api', function ($http) {

    this.getSurveys = function () {
        return $http.get('/surveys')
                .success(function (data, status, headers, config) {
                    console.log('Palvelin lähetti vastauksen!');
                    console.log(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                });
    };

    this.getSurvey = function (id) {
        var path = '/surveys/'+id;
        return $http.get(path)
                .success(function (data, status, headers, config) {
                    console.log('Palvelin lähetti vastauksen!');
                    //console.log(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                });
    };

    this.addSurvey = function (survey) {
        return $http.post('/surveys', survey)
                .success(function (data, status, headers, config) {
                    console.log('Palvelin lähetti vastauksen, survey lisätty:');
                    console.log(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                });
    }
    
    this.deleteSurvey = function (surveyId) {
                return $http.get('/surveys/'+surveyId+'/del')
                .success(function () {
                    console.log('Palvelin lähetti vastauksen, survey poistettu:');
                    console.log(surveyId);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                });
    }

    this.getPerson = function (id) {
                var path = '/persons/'+id;
        return $http.get(path)
                .success(function (data, status, headers, config) {
                    console.log('Palvelin lähetti vastauksen!');
                    console.log(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                });
    };
    
    this.addPerson = function (person, surveyId) {
                return $http.post('/surveys/'+surveyId+'/person', person)
                .success(function (data, status, headers, config) {
                    console.log('Palvelin lähetti vastauksen, person lisätty:');
                    console.log(surveyId);
                    //console.log(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                });
    }
        
    this.deletePerson = function (personId) {
                return $http.get('/persons/'+personId+'/del')
                .success(function () {
                    console.log('Palvelin lähetti vastauksen, person poistettu:');
                    console.log(personId);
                    //console.log(data);
                })
                .error(function (data, status, headers, config) {
                    console.log('Jotain meni pieleen...');
                });
    }

    // Käyttäjän Api-funktiot
    this.login = function (user) {
        // Tarkista käyttäjän kirjautuminen lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users/authenticate
    }
    this.register = function (user) {
        // Lisää annettu käyttäjä lähettämällä POST-pyyntö toteuttamasi Api:n polkuun /users
    }
    this.getUserLoggedIn = function () {
        // Hae kirjautunut käyttäjä toteuttamasi Api:n polusta /users/logged-in
    }
    this.logout = function () {
        return $http.get('/users/logout');
    }
});
