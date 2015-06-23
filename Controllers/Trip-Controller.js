(function () {
    var TripController = function ($scope, tripService,$state) {
        $scope.isSucess = false;
        $scope.Title = "Create Trip";
        $scope.submitted = false;
        var defaultTrip = { name: '', Category: '', Description: '', Destination: '' };
        $scope.cancel = function () {
            $state.go("Home");
        }
        $scope.save = function (isInValid) {
            $scope.submitted = true;
            if (isInValid) return;
            tripService.createTrip($scope.trip).then(function (data) {
                $scope.isSucess = true;
                $scope.trip = defaultTrip;
            }, function (error) {
                $scope.error = error;
            });
        };
    }
    app.controller("TripController", TripController);
}());