(function () {

 	var app = angular.module("wcCardsResponsive",[]);

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
