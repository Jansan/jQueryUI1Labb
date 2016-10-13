/// <reference path="../angular.js" />

angular.module("mainModule")
    .controller("MainController", [
        "$scope",
        "$location",
        "$route",
        function ($scope, $location, $route) {
            $scope.$route = $route;

            $scope.data = {
                notes: [
                    {
                        id: 1,
                        title: "Todo 1",
                        description: "Description 1"

                    },
                    {
                        id: 2,
                        title: "Todo 2",
                        description: "Description 2"

                    },
                    {
                        id: 3,
                        title: "Todo 3",
                        description: "Description 3"

                    }

                ]
            }

            $scope.go = function (url) {
                $location.path(url);
            };
        }
    ]);