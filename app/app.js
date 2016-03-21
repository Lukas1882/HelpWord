'use strict';
angular.module('HelpWord', [
  // load your modules here
  'main', 'pascalprecht.translate' // starting with the main module
]) .config(function ($stateProvider, $urlRouterProvider, $translateProvider) {
  $translateProvider.translations('chs', {
    'MENU': '菜单',

  });
  $translateProvider.translations('es', {
    'MENU': 'Menu',

  });
  $translateProvider.preferredLanguage('chs');
  $translateProvider.fallbackLanguage('en');
});
