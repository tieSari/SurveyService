SurveyApp.controller('ShowSurveyController', function($scope, $routeParams, $location, Api){
 
 console.log("surveyn id: "+$routeParams.id);
 Api.getSurvey($routeParams.id).success(function(survey){
        $scope.survey = survey;

    console.log("surveyn nimi: "+$scope.survey.name);
    console.log("surveyn hlöt: "+$scope.survey.People);
  //  console.log(survey);
  });
   
});