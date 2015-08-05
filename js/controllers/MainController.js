  app.controller('MainController',
    ['$scope', function($scope) {
      $scope.title = 'Tony\'s Favorite Books';
      $scope.promo = "50% off today!";
      $scope.product = {
        name: 'The Book of Trees',
        price: 19,
        pubdate: new Date('2014', '03', '08')
      }

    }]);
