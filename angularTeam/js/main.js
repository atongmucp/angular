var app = angular.module("myapp",["ui.router","myapp.homeCtrl","myapp.privilegeCtrl","myapp.lifeCtrl","myapp.myCtrl"])
	.config(function($stateProvider){
		$stateProvider
		 .state("tab",{
		 	url:"/tabs",
			templateUrl:"tab.html",
			abstract:true,
		 })
		 .state("tab.home",{
		 	url:"/home",
				views:{
					"home-tab":{
						templateUrl:"home.html",
						controller:"homeCtrl",
					}
				}
		 })
		 .state("tab.privilege",{
		 	url:"/privilege",
		 	views:{
		 		"privilege-tab":{
		 			templateUrl:"privilege.html",
		 			controller:"privilegeCtrl",
		 		}
		 	}
		 	
		 })
		 .state("tab.life",{
		 	url:"/life",
		 	views:{
		 		"life-tab":{
		 			templateUrl:"life.html",
		 			controller:"lifeCtrl",
		 		}
		 	}
		 	
		 })
		 .state("tab.my",{
		 	url:"/my",
		 	views:{
		 		"my-tab":{
		 			templateUrl:"my.html",
		 			controller:"myCtrl",
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
		$urlRouterProvider.otherwise("/tabs/home");
	})
	