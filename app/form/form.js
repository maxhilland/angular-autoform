'use strict';

angular.module('autoform.form', ['ngRoute', 'ngMessages'])

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

    $scope.setName = function(userForm) {
      var firstName = userForm.firstName.$viewValue,
          lastName = userForm.lastName.$viewValue,
          fullName = firstName + ' ' + lastName;

          userForm.fullName.$viewValue = fullName;
    }

    $scope.submitForm = function(isValid) {
      if (isValid) {
        alert('Form valid.');
      } else {
        alert('Form invalid.');
      }
    }
  });
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
