// name our angular app 
angular.module('firstApp', [])

.controller('mainController', function () {
    
    // bind this to vm (view model)
    var vm = this;

    // define variable and objects on this
    // this lets them be available to our views
    
    // deine a basic variable
    vm.message = "Hey there! Come and see how good I look!";

    // define a list of items
    vm.computers = [
    {name: 'Macbook', color: 'silver', nerdness: 7 },
    {name: 'Yoga 2 Pro', color: 'Grey', nerdness: 6 },
    {name: 'Chromebook', color: 'Black', nerdness: 5 }
    ];


});