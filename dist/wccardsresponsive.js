angular.module('wcCardsResponsiveTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('cards-responsive.html',
    "<div class=\"card\" ng-class=\"{'d-block d-md-none': $ctrl.fixedTopTabs!=='Y', 'd-block': $ctrl.fixedTopTabs==='Y'}\">\r" +
    "\n" +
    "  	<div class=\"card-header d-flex justify-content-between\">\r" +
    "\n" +
    "	    <ul class=\"nav nav-tabs card-header-tabs\" >\r" +
    "\n" +
    "	      <li ng-repeat=\"item in $ctrl.config track by $index\" class=\"nav-item\">\r" +
    "\n" +
    "	      	<a href=\"#\" ng-click=\"$ctrl.selectedNav=item.nav.name\" class=\"nav-link\" ng-class=\"{'active': $ctrl.selectedNav===item.nav.name, 'disabled': item.nav.disabled===true}\">{{item.nav.tabTitle}}</a>\r" +
    "\n" +
    "	      </li>\r" +
    "\n" +
    "	    </ul>\r" +
    "\n" +
    "	    <div ng-if=\"$ctrl.config[$ctrl.selectedNav].headerText\">\r" +
    "\n" +
    "		    {{$ctrl.config[$ctrl.selectedNav].headerText}}\r" +
    "\n" +
    "	  	</div>\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "  	<div class=\"card-body\">\r" +
    "\n" +
    "  		<img src=\"{{$ctrl.config[$ctrl.selectedNav].topImage}}\" class=\"card-img-top\" alt=\"Top Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config[$ctrl.selectedNav].topImage\">\r" +
    "\n" +
    "	  	<h5 class=\"card-title\" ng-if=\"$ctrl.config[$ctrl.selectedNav].title\">{{$ctrl.config[$ctrl.selectedNav].title}}</h5>\r" +
    "\n" +
    "	    <h6 class=\"card-subtitle mb-2 text-muted\" ng-if=\"$ctrl.config[$ctrl.selectedNav].subTitle\">{{$ctrl.config[$ctrl.selectedNav].subTitle}}</h6>\r" +
    "\n" +
    "	    <p class=\"card-text\" ng-if=\"$ctrl.config[$ctrl.selectedNav].bodyText\">{{$ctrl.config[$ctrl.selectedNav].bodyText}}</p>\r" +
    "\n" +
    "	    <a href=\"{{link.href}}\" class=\"card-link\" ng-repeat=\"link in $ctrl.config[$ctrl.selectedNav].cardLinks track by $index\" ng-if=\"$ctrl.config[$ctrl.selectedNav].cardLinks.length>0\">{{link.text}}</a>\r" +
    "\n" +
    "	    <img src=\"{{$ctrl.config[$ctrl.selectedNav].bottomImage}}\" class=\"card-img-top\" alt=\"Bottom Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config[$ctrl.selectedNav].bottomImage\">\r" +
    "\n" +
    "	    <ul class=\"list-group list-group-flush\" ng-if=\"$ctrl.config[$ctrl.selectedNav].cardDetails.length>0\">\r" +
    "\n" +
    "	    	<li class=\"list-group-item\" ng-repeat=\"detail in $ctrl.config[$ctrl.selectedNav].cardDetails track by $index\">{{detail.text}}</li>\r" +
    "\n" +
    "	    </ul>\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "  	<div class=\"card-footer text-muted\" ng-if=\"$ctrl.config[$ctrl.selectedNav].footerText\">\r" +
    "\n" +
    "    	{{$ctrl.config[$ctrl.selectedNav].footerText}}\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "  	\r" +
    "\n" +
    "<div class=\"card mb-3\" ng-class=\"{'d-none d-md-block': $ctrl.fixedTopTabs!=='Y', 'd-none': $ctrl.fixedTopTabs==='Y'}\">\r" +
    "\n" +
    "	<div class=\"card-header\" ng-if=\"$ctrl.config[$ctrl.selectedNav].headerText\">\r" +
    "\n" +
    "	    {{$ctrl.config[$ctrl.selectedNav].headerText}}\r" +
    "\n" +
    "  	</div>\r" +
    "\n" +
    "	<div class=\"row no-gutters\">\r" +
    "\n" +
    "	    <div class=\"col-md-4\">\r" +
    "\n" +
    "	    	<div class=\"card-header text-center pr-0\">\r" +
    "\n" +
    "	    		<ul class=\"nav nav-tabs card-header-tabs d-flex flex-column mr-0\">\r" +
    "\n" +
    "			      <li ng-repeat=\"item in $ctrl.config track by $index\" class=\"nav-item\">\r" +
    "\n" +
    "			      	<a href=\"\" ng-click=\"$ctrl.selectedNav=item.nav.name\" class=\"nav-link tabResponsive\" ng-class=\"{'active': $ctrl.selectedNav===item.nav.name, 'disabled': item.nav.disabled===true}\">{{item.nav.tabTitle}}</a>\r" +
    "\n" +
    "			      </li>\r" +
    "\n" +
    "			    </ul>\r" +
    "\n" +
    "	    	</div>\r" +
    "\n" +
    "	    </div>\r" +
    "\n" +
    "	    <div class=\"col-md-8\">\r" +
    "\n" +
    "	      <div class=\"card-body\">\r" +
    "\n" +
    "	        <img src=\"{{$ctrl.config[$ctrl.selectedNav].topImage}}\" class=\"card-img-top\" alt=\"Top Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config[$ctrl.selectedNav].topImage\">\r" +
    "\n" +
    "		  	<h5 class=\"card-title\" ng-if=\"$ctrl.config[$ctrl.selectedNav].title\">{{$ctrl.config[$ctrl.selectedNav].title}}</h5>\r" +
    "\n" +
    "		    <h6 class=\"card-subtitle mb-2 text-muted\" ng-if=\"$ctrl.config[$ctrl.selectedNav].subTitle\">{{$ctrl.config[$ctrl.selectedNav].subTitle}}</h6>\r" +
    "\n" +
    "		    <p class=\"card-text\" ng-if=\"$ctrl.config[$ctrl.selectedNav].bodyText\">{{$ctrl.config[$ctrl.selectedNav].bodyText}}</p>\r" +
    "\n" +
    "		    <a href=\"{{link.href}}\" class=\"card-link\" ng-repeat=\"link in $ctrl.config[$ctrl.selectedNav].cardLinks track by $index\" ng-if=\"$ctrl.config[$ctrl.selectedNav].cardLinks.length>0\">{{link.text}}</a>\r" +
    "\n" +
    "		    <img src=\"{{$ctrl.config[$ctrl.selectedNav].bottomImage}}\" class=\"card-img-top\" alt=\"Bottom Image Unavailable. Please check source url.\" ng-if=\"$ctrl.config[$ctrl.selectedNav].bottomImage\">\r" +
    "\n" +
    "		    <ul class=\"list-group list-group-flush\" ng-if=\"$ctrl.config[$ctrl.selectedNav].cardDetails.length>0\">\r" +
    "\n" +
    "		    	<li class=\"list-group-item\" ng-repeat=\"detail in $ctrl.config[$ctrl.selectedNav].cardDetails track by $index\">{{detail.text}}</li>\r" +
    "\n" +
    "		    </ul>\r" +
    "\n" +
    "	      </div>\r" +
    "\n" +
    "	    </div>\r" +
    "\n" +
    "	  </div>\r" +
    "\n" +
    "	  <div class=\"card-footer text-muted\" ng-if=\"$ctrl.config[$ctrl.selectedNav].footerText\">\r" +
    "\n" +
    "	    	{{$ctrl.config[$ctrl.selectedNav].footerText}}\r" +
    "\n" +
    "	  	</div>\r" +
    "\n" +
    "	</div>\r" +
    "\n" +
    "</div>"
  );

}]);

(function () {

 	var app = angular.module("wcCardsResponsive",["wcCardsResponsiveTemplates"]);

	app.component("wcCardsResponsive", {
		templateUrl: "cards-responsive.html",
		bindings: {
			config: "<cardsConfig",
			pills: "<",
			fixedTopTabs: "@"
		},
		controller: "CardsResponsiveController"
	});

	app.controller("CardsResponsiveController", CardsResponsiveControllerFn);

	CardsResponsiveControllerFn.$inject = ["$scope"];

	function CardsResponsiveControllerFn($scope) {

		var vm = $scope.$ctrl;
		vm.selectedNav = 0;
	}

})();
