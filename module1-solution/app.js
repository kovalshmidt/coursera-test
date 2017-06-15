(function () {
    'use strict';

    angular.module('LunchCheckApp', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.input = "";
        $scope.placeHolder = "";

        $scope.showMsg = function checkQuantity() {
            var items = $scope.input.split(',');

            if(items.length == 1 && items[0] == "")
                $scope.placeHolder = "Please enter a value";
            else if(items.length <=3 )
                $scope.placeHolder = "Enjoy";
            else
                $scope.placeHolder = 'Too much!';

        }
    }

    var Dog = function(breed){
        this.breed = breed;
        this.bark = function(){
            return breed + " barks";
        }
    };

    var pitbull = new Dog("pitbull");
    console.log("pitbull.breed: " + pitbull.breed);
    console.log("pitbull.bark: " + pitbull.bark());

    var dobermann = new Dog("dobermann");
    console.log("dobermann.breed: " + dobermann.breed);
    console.log("dobermann.bark: " + dobermann.bark());
})();