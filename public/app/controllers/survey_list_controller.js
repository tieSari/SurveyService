SurveyApp.controller('SurveyListController', function ($scope, $location, Api) {

    $scope.newSurvey = {id:"", name:"",description:""};
    
    $scope.surveys = Api.getSurveys().success(function (surveys) {
        $scope.surveys = surveys;
    });

$scope.addSurvey = function(){
    Api.addSurvey($scope.newSurvey).success(function (newSurvey) {
        $scope.surveys.push(newSurvey);
        //$location.path('#/surveys/'+newSurvey.id);
        console.log("uusi tiedonkeruu: "+newSurvey.name);
    });
};

    $scope.deleteSurvey = function(index,id){
    Api.deleteSurvey(id).success(function () {
        $scope.surveys.splice(index,1);
        $location.path('/');
    });
};

});


