app.controller('MainController', function ($scope, $route) {

    try {

        Typekit.load({ async: true });

    } catch (err) {

        console.log(err);

    }

});

app.controller('HomeController', function ($scope) {
    $scope.title = "Hi, I'm Justin*";
    $scope.tagline = "I develop in javascript";

    $scope.disclaimer = '* this is me at NYCC 2014';

    $scope.mission = "I’m looking for full time employment to develop and maintain javascript web applications. I’m interested in working with a close knit team with clearly defined goals to create useful solutions for end-users.";
});