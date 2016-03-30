(function () {
  'use strict';
  
 var app =angular
      .module('myApp',['ngMaterial', 'ngMessages','ui.bootstrap']);
      app.controller('DemoCtrl', DemoCtrl);

  function DemoCtrl ($timeout, $q, $scope) {
    var self = this;
 $scope.showHints = true;
    $scope.user = {
      name: "",
      email: "",
      social: "123456789",
      phone: ""
    };

    
  $scope.login = function (username, password) {
    if ( username === 'admin' && password === 'admin') {
        //authentication.isAuthenticated = true;
       
        $scope.user = username;
         window.location = "admin.html";
    }else 
      if( username === 'neha' && password === 'neha') {
        //authentication.isAuthenticated = true;
        
        $scope.user = username;
     window.location = "user.html";
    } else {
        $scope.loginError = "Invalid username/password combination";

    };
  };


app.factory('Auth', function(){
var user;

return{
    setUser : function(aUser){
        user = aUser;
    },
    isLoggedIn : function(){
        return(user)? user : false;
    }
  }
})

 app.run(['$rootScope', '$location', 'Auth', function ($rootScope, $location, Auth) {
    $rootScope.$on('$routeChangeStart', function (event) {

        if (!Auth.isLoggedIn()) {
            console.log('DENY');
            event.preventDefault();
            $location.path('/login');
        }
        else {
            console.log('ALLOW');
            $location.path('/home');
        }
    });
}]);


      $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: './images/carousel1.jpe'
    },
    {
      image: './images/carousel2.jpe'
    },
    {
      image: './images/carousel3.jpe'
    },
    {
      image: './images/carousel4.jpe'
    }
  ];
    // list of `state` value/display objects
    self.states        = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.states.filter( createFilterFor(query) ) : [];
      return results;
    }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
              Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
              Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
              Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
              North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
              South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
              Wisconsin, Wyoming';

      return allStates.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(state) {
        return (state.value.indexOf(lowercaseQuery) === 0);
      };

    }

         app
          .config(function( $mdThemingProvider){
               $mdThemingProvider.theme('default')
              .primaryPalette('green')
              .accentPalette('red');

          })
  }
})();
