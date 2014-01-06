//"use strict";

angular.module("okcApp")
    .controller("MainCtrl", function ($scope, $http) {
        $scope.awesomeThings = [
            "HTML5 Boilerplate",
            "AngularJS",
            "Karma"
          ];

        $scope.externalhtml = "";
        $http.get("http://www.okcupid.com").then(function(response){$scope.externalhtml = response;});


    });