angular.module("devApp").service("shopService", function($http) {

    this.getProducts = function() {
        return $http.get('https://practiceapi.devmountain.com/products')
    }

    this.getProductId = function(item) {
        let id = item.id;
        return $http.get(`https://practiceapi.devmountain.com/products/${id}`)
    }
})