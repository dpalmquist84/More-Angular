

console.log(`loads`)

app.run(function($rootScope){
    $rootScope.color = 'blue';
})

app.controller("myCtrl", function ($scope) {
    $scope.firstName = "david";
    $scope.lastName = "Palmquist"
    $scope.changeName = function() {
        $scope.firstName = "Sarah"
    }
    $scope.color = 'red';

});
