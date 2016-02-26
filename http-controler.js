//var app = angular.module("myApp", []);


//-------$http methord
//------------------------------------------------------
// app.controller("htmlCtrl", ["$http","$scope",function($http, $scope) {

//     $http.get("tiles.json").
//     success(function(data) {
//         $scope.tiles = data;

//     }).
//     error(function(data) {

//     });
// }]);
//------------------------------------------------------
// app.controller("htmlCtrl", function($scope, $http) {
//     $http({
//         method: "GET",
//         url: "tiles.json"
//     }).success(function(data) {
//         $scope.tiles = data;
//     }).error(function(data) {
//         // do if error
//     });

// });
//-------------------------------------------------------
// app.controller("htmlCtrl", ["$scope","$http",function($scope,$http) {
//     var promise = $http({
//         method: "GET",
//         url: "tiles.json"
//     });
//     promise.then(function(resp) {
//         $scope.tiles = resp.data;
//     },function(resp){
//     	// error information

//     });

// }]);
//------------------------------------------------------
// app.controller("htmlCtrl",["$http","$scope",function($http,$scope){
//     var promise = $http({
//     	method:"GET",
//     	url:"tiles.json"
//     })
//     promise.success(function(data){
//     	$scope.tiles = data;
//     });
//     promise.error(function(data){
//     	//error information
//     });

// }]);
//----------------$resource methord---------

var app = angular.module("myApp",['ngResource']);

app.controller("htmlCtrl",["$resource","$scope",function($resource,$scope){
 
    $resource("tiles.json").get(function(data){
    	$scope.tiles = data;
         console.log(data);
    });
   
}])



