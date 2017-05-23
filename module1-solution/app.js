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

    
    
    
})();