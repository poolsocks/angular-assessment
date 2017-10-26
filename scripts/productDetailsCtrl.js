
angular.module("devApp").controller('productDetailsCtrl', function($scope, shopService, $stateParams) {

  $scope.getProductId = function(){
      shopService.getProductId($stateParams).then(response => {
          $scope.product = response.data;
      });
  }

  $scope.getProductId();

});