/**
 * Created by Shmidt on 15.06.2017.
 */


(function (){

    angular.module("ShoppingListCheckOff", [])
        .controller("ToBuyController", ToBuyController)
        .controller("AlreadyBoughtController", AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService){
        let itemsBuy = this;
        itemsBuy.items = ShoppingListCheckOffService.getItems();
        itemsBuy.bought = function(itemIndex){
            ShoppingListCheckOffService.bought(itemIndex);
        };
        itemsBuy.errorMessage = function(){
            return itemsBuy.items.length;
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService){
        let itemsBought = this;
        itemsBought.items = ShoppingListCheckOffService.getItemsBought();
        itemsBought.errorMessage = function (){
            return itemsBought.items.length;
        }
    }

    function ShoppingListCheckOffService(){

        let service = this;

        let items = [
            {name: "bread", quantity: 2},
            {name: "tomatoes", quantity: 10},
            {name: "lemon", quantity: 1},
            {name: "garlic", quantity: 2},
            {name: "orange-juice", quantity: 2}
        ];
        
        let boughtItems = [];

        service.bought = function(itemIndex){
            boughtItems.push(items[itemIndex]);
            items.splice(itemIndex, 1);
        };
        
        service.getItems = function () {
            return items;
        };

        service.getItemsBought = function (){
            return boughtItems;
        };


    }




})();