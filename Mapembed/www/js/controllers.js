angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('GoogleMapCtrl', ['$scope', function($scope){  
            var mapOptions = {  
                    zoom: 14,  
                    mapTypeId: google.maps.MapTypeId.TERRAIN  
                }  
  
            $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);  
            $scope.geocoder =new google.maps.Geocoder();  
          
            $scope.infoWindow = new google.maps.InfoWindow();  
              
            $scope.codeAddress = function() {  
                $scope.geocoder.geocode({ 'address': 'London' }, function(results, status) {  
                    if(status == google.maps.GeocoderStatus.OK) {  
                        $scope.map.setCenter(results[0].geometry.location);  
                        this.marker =new google.maps.Marker({  
                            title: 'London',  
                            map: $scope.map,  
                            position:results[0].geometry.location  
                        });  
                        $scope.infowindow =new google.maps.InfoWindow({  
                            content: '<strong>'+ 'London' +'</strong><br/>'+'Lat: '+ results[0].geometry.location.lat() +'<br/>Lng: '+ results[0].geometry.location.lng()  
                        });  
                        $scope.infowindow.open($scope.map, marker);  
                    }  
                });  
            };  
    }])  
;
