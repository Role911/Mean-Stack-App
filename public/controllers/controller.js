var myApp =angular.module("myApp",[]);

myApp.controller("AppCtrl", ["$http","$scope",
 function($http,$scope) {


var refresh=function() {
//Dohvacanje podataka
    $http.get("/contactList").success(function(response){
    console.log("Imam podatke");
    $scope.contactList = response;
    $scope.contact= "";
    });
};
//Ponovno dohvacanje
refresh();
//Dodavanje
$scope.addContact = function() {
console.log($scope.contact);
$http.post("/contactList", $scope.contact).success(function(response){

    $scope.contactList.push(response);
});
};

//Brisanje 

$scope.remove = function(id){
    console.log(id);
    $http.delete('/contactList/' + id).success(function(response){
        refresh();
    });
};

//editiranje

$scope.edit = function(id){
    console.log(id);
    $http.get('/contactList/' + id).success(function(response){
        $scope.contact= response;
    });
}
//upadte
$scope.update = function(id){
    console.log($scope.contact.id);
    $http.put('/contactList/' + $scope.contact._id, $scope.contact).success(function(response){
        refresh();
    });
};
// deselect
$scope.deselect= function() {
    $scope.contact = "";
};

} ]);

