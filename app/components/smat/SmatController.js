'use strict';

/**
 * @ngdoc function
 * @name app.controller:SmatCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app').controller('SmatCtrl', function ($scope, Users) {
	$scope.date = new Date();
	$scope.listSmaters = [];
	$scope.listCoSmaters = [];
	$scope.listSmatReceivers = [];
	$scope.listDepartment = [];
	$scope.listWorkStation = [];
	$scope.listType = [];
	$scope.listAction = [];
	$scope.listDeadline = [];

	$scope.smaterId = -1;
	$scope.coSmaterId = -1;
	$scope.smaterReceiverId = -1;
	$scope.departmentId = -1;
	$scope.workstationId = -1;
	$scope.observedActivity = '';

    $scope.lines = [];

    $scope.id=1;

	$scope.name = 'Benjamin';

	$scope.loadData = function() {
		var listUsers = [];
		listUsers.push({id: '1', label: 'Benjamin Corbara'});
		listUsers.push({id: '2', label: 'Sarah Kermadi'});
		listUsers.push({id: '3', label: 'Clément Corbara'});
		listUsers.push({id: '4', label: 'Pierre Paul Jacques'});

		$scope.listSmaters = listUsers;
		$scope.listCoSmaters = listUsers;
		$scope.listSmatReceivers = listUsers;

		var listDep = [];
		listDep.push({id: '1', label: 'Dep 1'});
		listDep.push({id: '2', label: 'Dep 2'});
		listDep.push({id: '3', label: 'Dep 3'});
		listDep.push({id: '4', label: 'Dep 4'});
		$scope.listDepartment = listDep;

		var listWorkStation = [];
		listWorkStation.push({id: '1', label: 'Work 1'});
		listWorkStation.push({id: '2', label: 'Work 2'});
		listWorkStation.push({id: '3', label: 'Work 3'});
		listWorkStation.push({id: '4', label: 'Work 4'});
		$scope.listWorkStation = listWorkStation;

		var listType = [];
		listType.push({id : '1', label : 'Type 1'});
		listType.push({id : '2', label : 'Type 2'});
		listType.push({id : '3', label : 'Type 3'});
		$scope.listType = listType;

		var listAction = [];
		listAction.push({id : '1', label : 'Action 1'});
		listAction.push({id : '2', label : 'Action 2'});
		listAction.push({id : '3', label : 'Action 3'});
		$scope.listAction = listAction;

		var listDeadline = [];
		listDeadline.push({id : '1', label : 'Dead 1'});
		listDeadline.push({id : '2', label : 'Dead 2'});
		listDeadline.push({id : '3', label : 'Dead 3'});
		$scope.listDeadline = listDeadline;

		/*$http.get('http://rest-service.guides.spring.io/greeting').
			success(function(data) {
				$scope.greeting = data;
			});*/


	};

	$scope.addLine = function () {
		var line = {
			id : $scope.id++,
			type : '',
			category : '',
			obsDesc : '',
			discAns : '',
			description : '',
			action : '',
			respPerson : '',
			deadLine : ''
		};

	  $scope.lines.push(line);
	};

	$scope.removeLine = function(index) {
		$scope.lines.splice(index, 1);
	};

	$scope.idUser = 1;
	$scope.getUser = function() {
		var user = Users.get({ id : $scope.idUser }, function() {
			console.log(user);
			console.log(user.firstname);
		});
	};
});
