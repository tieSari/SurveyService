var SurveyApp = angular.module('SurveyApp', ['ngRoute']);

SurveyApp.config(function($routeProvider){
  $routeProvider
        .when('/', {
      controller: 'SurveyListController',
      templateUrl: 'app/views/surveys/index.html'
    })
    .when('/surveys/:id', {
      controller: 'ShowSurveyController',
      templateUrl: 'app/views/surveys/show.html'
    })
        .when('/persons/:id', {
      controller: 'ShowPersonController',
      templateUrl: 'app/views/persons/show.html'
    })
    .when('/login', {
      controller: 'UsersController',
      templateUrl: 'app/views/users/login.html'
    })
    .when('/register', {
      controller: 'UsersController',
      templateUrl: 'app/views/users/register.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});

SurveyApp.run(function($rootScope, $location, Api){
  $rootScope.logOut = function(){
    Api.logout().success(function(){
      $location.path('/login');
      $rootScope.userLoggedIn = null;
    });
  };
});
