angular.module("devApp").controller('shopCtrl', function($scope, shopService) {



 shopService.getProducts()
  .then(response => {
  	console.log(response)
    return $scope.products = response.data;
  })

})