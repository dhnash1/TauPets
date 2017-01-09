console.log("clientside loaded");//assure that javascript hasnt spontaniously combusted

var petApp = angular.module('petApp', []);//Creates a new module and assigns it to petApp

petApp.controller('control', ['$scope' , '$http', function($scope, $http){//sets up the controller from the HTML
  console.log("angular loaded");//chech that Angular isnt being lazy

  $scope.submit = function(){//function expression "submit()"

    $http({
      method: "POST",
      url:"/route",
      data:{
        name: $scope.name,
        species: $scope.species,
        age: $scope.age,
        image: $scope.img
      }// put together an object to send
    }).then(function(res){
      console.log(res.data);
    });//end then
        $scope.name = "";
        $scope.species = "";
        $scope.age = "";
        $scope.img = "";
        $scope.get();
  };//end expression submit()

  $scope.get = function(){
    console.log("getting...");

    $http({
      method: "GET",
      url:"/route"
    }).then(function(res){
      console.log(res.data);
      $scope.recieved = res.data;
    });
  };
$scope.get();
}]);//end controller
