SurveyApp.controller('ShowPersonController', function($scope, $routeParams, $location, Api){
 
//    Api.getPerson($routeParams.id).success(function(person){
//    $scope.name = person.name;
//    $scope.phone = person.phone;
//    $scope.email = person.email;
//    console.log("kohdehenkilön nimi: "+$scope.name);
//  });
  
  $scope.addPerson = function(){
      console.log("lisättävä kohdehlö: "+$scope.personToAdd.name+"tiedonkeruun id: "+$scope.$parent.survey.id);
    Api.addPerson($scope.personToAdd, $scope.$parent.survey.id).success(function (personToAdd) {
        $scope.$parent.survey.People.push(personToAdd);       
        $scope.name = "";
        $location.path('/surveys/'+personToAdd.surveyid);
        console.log("uusi kohdehlö: "+personToAdd.name);
    });
};

  $scope.deletePerson = function(index,id){
    Api.deletePerson(id).success(function () {
        $scope.$parent.survey.People.splice(index,1);
        $location.path('/surveys/'+$scope.$parent.survey.id);
    });
};
   
});