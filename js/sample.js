
var app = angular.module('PlantdeskApp', ['ui.tree'])
// Controller.
app.controller('PlantdeskController', function($scope, $http) {
    scope = $scope;
    http = $http;
   
    $scope.data = [
        {
            "id": 1,
            "title": "Line_1",
            "nodes": [
                {
                    "id": 11,
                    "title": "Area.1",
                    "nodes": [
                        {
                            "id": 111,
                            "title": "item.1.1",
                            "nodes": []
                        }
                    ]
                },
                {
                    "id": 12,
                    "title": "Area.2",
                    "nodes": []
                }
            ]
        },
        {
            "id": 2,
            "title": "Line2",
            "nodrop": true,
            "nodes": [
                {
                    "id": 21,
                    "title": "area.1",
                    "nodes": []
                },
                {
                    "id": 22,
                    "title": "area.2",
                    "nodes": []
                }
            ]
        },
        {
            "id": 3,
            "title": "Line3",
            "nodes": [
                {
                    "id": 31,
                    "title": "area.1",
                    "nodes": []
                }
            ]
        }
    ]
        $scope.remove = function (scope) {
            scope.remove();
        };

        $scope.toggle = function (scope) {
            scope.toggle();
        };

        $scope.moveLastToTheBeginning = function () {
            var a = $scope.data.pop();
            $scope.data.splice(0, 0, a);
        };

        $scope.newSubItem = function (scope) {
            var nodeData = scope.$modelValue;
            console.log(scope)
            console.log(nodeData)
            nodeData.nodes.push({
                id: nodeData.id * 10 + nodeData.nodes.length,
                title: nodeData.title + '.' + (nodeData.nodes.length + 1),
                nodes: []
            });
        };

        $scope.collapseAll = function () {
            $scope.$broadcast('angular-ui-tree:collapse-all');
        };

        $scope.expandAll = function () {
            $scope.$broadcast('angular-ui-tree:expand-all');
        };
});
