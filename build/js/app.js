var app = angular.module('portfolio-site', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .otherwise({ redirectTo: '/' });
}]);

app.controller('MainController', function ($scope, $http, GetContent) {

    try {

        Typekit.load({ async: true });

        GetContent.getJson('./data/content.json').then(function (data) {
            $scope.content = data;
        });

    } catch (err) {

        console.log(err);

    }

});

app.controller('HomeController', function ($scope) {

    $scope.title = $scope.content.title;
    $scope.tagline = $scope.content.tagline;
    $scope.disclaimer = $scope.content.disclaimer;
    $scope.mission = $scope.content.mission;
    $scope.statement = $scope.content.statement;
    $scope.languages = $scope.content.languages;
    $scope.projectTitle = $scope.content.projectTitle;

});

app.service('GetContent', function ($http) {
    return {
        getJson : function(url) {
            return $http.get(url).then(function (response) {
                //console.log(response.data);
                return response.data;
            });
        }
    }
});