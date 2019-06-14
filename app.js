(function () {

 	var app = angular.module("main",['wcCardsResponsive']);

	app.component("app", {
		template: '<wc-cards-responsive style="min-height: 50vh;width: 100%" cards-config="config" pills="false"></wc-cards-responsive>',
		bindings: {
			
		},
		controller: "AppController"
	});

	app.controller("AppController", AppControllerFn);

	AppControllerFn.$inject = ["$scope"];

	function AppControllerFn($scope) {

		$scope.config = [{
				nav: {
					name: 0,
					tabTitle: 'Tab 1'
				},
				headerText: 'Header 1',
				// topImage: '',
				// title: 'Card title 1',
				// subTitle: 'Card subtitle 1',
				// bodyText: 'This is some text within a card body 1.',
				// cardLinks: [{
				// 	text: 'Card link',
				// 	href: '#'
				// },{
				// 	text: 'Another link',
				// 	href: '#'
				// }],
				cardDetails: [{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				},{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				},{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				}],
				footerText: 'Footer Text 1',
				bottomImage: ''	
			},
			{
				nav: {
					name: 1,
					tabTitle: 'Tab 2'
				},
				headerText: 'Header 2',
				// topImage: '',
				// title: 'Card title 2',
				// subTitle: 'Card subtitle 2',
				// bodyText: 'This is some text within a card body 2.',
				// cardLinks: [{
				// 	text: 'Card link',
				// 	href: '#'
				// },{
				// 	text: 'Another link',
				// 	href: '#'
				// }],
				cardDetails: [{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				},{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				},{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				}],
				footerText: 'Footer Text 2',
				bottomImage: ''	
			},
			{
				nav: {
					name: 2,
					tabTitle: 'Tab 3'
				},
				headerText: 'Header 3',
				// topImage: '',
				// title: 'Card title 3',
				// subTitle: 'Card subtitle 3',
				// bodyText: 'This is some text within a card body 3.',
				// cardLinks: [{
				// 	text: 'Card link',
				// 	href: '#'
				// },{
				// 	text: 'Another link',
				// 	href: '#'
				// }],
				cardDetails: [{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				},{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				},{
					text: 'Cras justo odio'
				},{
					text: 'Dapibus ac facilisis in'
				},{
					text: 'Vestibulum at eros'
				}],
				footerText: 'Footer Text 3',
				bottomImage: ''	
			}];
		
	}

})();
