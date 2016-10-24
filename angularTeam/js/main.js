var app = angular.module("myapp",["ui.router"])
	.config(function($stateProvider){
		$stateProvider
		 .state("home",{
		 	url:"/home",
		 	templateUrl:"home.html",
		 	controller:"homeController",
		 })
		 .state("privilege",{
		 	url:"/privilege",
		 	templateUrl:"privilege.html",
		 	controller:"privilegeController",
		 })
		 .state("life",{
		 	url:"/life",
		 	templateUrl:"life.html",
		 	controller:"lifeController",
		 })
		 .state("my",{
		 	url:"/my",
		 	templateUrl:"my.html",
		 	controller:"myController",
		 })
		
	})
	//大小写不区分
	.config(function($urlMatcherFactoryProvider) {
		$urlMatcherFactoryProvider.caseInsensitive(true);
	})
	//默认页面
	.config(function($urlRouterProvider) {
		$urlRouterProvider.otherwise("/home");
	})
	.controller("homeController",function($scope){
		
		$scope.title = "首页";
		var mySwiper = new Swiper('.swiper-container', {
			autoplay: 1000,//可选选项，自动滑动
			loop:true,
		})
	})
	.controller("privilegeController",function($scope){
		
		
		$scope.title = "特权";
	})
	.controller("lifeController",function($scope){
		
		
		$scope.title = "生活";
	})
	.controller("myController",function($scope){
		
		
		$scope.title = "我的";
	})
	.controller("mainCtrl",function($scope){
		
		
		
	})
	

