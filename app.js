(function () {

 	var app = angular.module("main",['wcCardsResponsive']);

	app.component("app", {
		template: '<wc-cards-responsive style="min-height: 50vh;width: 100%"></wc-cards-responsive>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		
		
	}

})();
