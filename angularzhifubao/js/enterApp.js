var app = angular.module("myapp",["ui.router","myapp.payCtrl","myapp.mouthCtrl","myapp.firentCtrl","myapp.treasureCtrl"])
	.config(function($stateProvider){
		$stateProvider
		 .state("tab",{
		 	url:"/tabs",
			templateUrl:"tab.html",
			abstract:true,
		 })
		 .state("tab.pay",{
		 	url:"/pay",
				views:{
					"pay-tab":{
						templateUrl:"pay.html",
						controller:"payCtrl",
					}
				}
		 })
		 .state("tab.mouth",{
		 	url:"/mouth",
		 	views:{
		 		"mouth-tab":{
		 			templateUrl:"mouth.html",
		 			controller:"mouthCtrl",
		 		}
		 	}
		 	
		 })
		 .state("tab.firend",{
		 	url:"/firend",
		 	views:{
		 		"firend-tab":{
		 			templateUrl:"firend.html",
		 			controller:"firentCtrl",
		 		}
		 	}
		 	
		 })
		 .state("tab.treasure",{
		 	url:"/treasure",
		 	views:{
		 		"treasure-tab":{
		 			templateUrl:"treasure.html",
		 			controller:"treasureCtrl",
		 		}
		 	}
		 	
		 })
		
	})
	//大小写不区分
	.config(function($urlMatcherFactoryProvider) {
		$urlMatcherFactoryProvider.caseInsensitive(true);
	})
	//默认页面
	.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise("/tabs/pay");
	})
	