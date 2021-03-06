'use strict';
// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('CodenameTank', ['ionic', 'ngCordova', 'config', 'CodenameTank.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    .state('app.reader', {
      url: '/reader',
      views: {
        'menuContent' :{
          templateUrl: 'templates/reader.html',
          controller: 'ReaderCtrl'
        }
      }
    })
    .state('app.achievements', {
      url: '/achievements',
      views: {
        'menuContent' :{
          templateUrl: 'templates/achievements.html'
        }
      }
    })
    .state('app.schedule', {
      url: '/schedule',
      views: {
        'menuContent' :{
          templateUrl: 'templates/schedule.html'
        }
      }
    })
    .state('app.speakers', {
      url: '/speakers',
      views: {
        'menuContent' :{
          templateUrl: 'templates/speakers.html'
        }
      }
    })
    .state('app.sponsors', {
      url: '/sponsors',
      views: {
        'menuContent' :{
          templateUrl: 'templates/sponsors.html'
        }
      }
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'templates/home.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});

