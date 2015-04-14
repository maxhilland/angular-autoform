'use strict';

angular.module('autoform.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'form/form.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', function($scope, $http) {
  $http.get('./data/form.json').then(function(res) {
    //console.log(res.data);
    $scope.formData = {};
    $scope.formData.inputs = res.data;

    $scope.submitForm = function(userForm) {
      if (userForm.$valid) {
        document.getElementById('form-valid').style.display = 'block';
        document.getElementById('form-invalid').style.display = 'none';
      } else {
        document.getElementById('form-invalid').style.display = 'block';
        document.getElementById('form-valid').style.display = 'none';
      }
    }
  })
})

.filter('toArray', function () {
  return function (obj) {
    if (!(obj instanceof Object)) {
      return obj;
    }

    return Object.keys(obj).map(function (key) {
      return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
    });
  }
});
