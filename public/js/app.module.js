var app = angular.module('StarterApp', ['ngMaterial']);

app.controller('AppCtrl', ['$scope', '$mdSidenav', '$timeout', function ($scope, $mdSidenav, $timeout) {
    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };


    $scope.items = [{'name':0,'class':'slideInUp','hidden':false},{'name':1,'class':'slideInUp','hidden':false},{'name':2,'class':'slideInUp','hidden':false}];


    $scope.myFunc = function () {
//        var i = 0;
//        while (i < 5) {
//            $timeout(function () {
//                $scope.items.push($scope.items.length);
//                console.log('hi');
//            }, 1000);
//            i += 1;
//            $scope.$apply();
//        }
    }
    $scope.myFunc();
    
    $scope.remove = function (num){
        var what = -1;
        for(var i = 0; i < $scope.items.length; i++)
        {
           
         if($scope.items[i].name == num)
         {
             what = i;
         }
        }
        
        console.log($scope.items);
        console.log(num);
        console.log($scope.items[num]);
     console.log(what);
        
     $scope.items[what].class = 'slideOutRight';
        $scope.items[what].hidden=true;
        //document.getElementById(num).setAttribute("hidden", "true");
    }



}]);