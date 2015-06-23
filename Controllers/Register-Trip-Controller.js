(function () {
    var RegisterTripController = function ($scope, $http, tripService, tripSubscriberService) {
        $scope.isSucess = false;
        $scope.getTrips = function () {
            $scope.Trips = tripService.getTrips();
        };
        var errorDetails = function (serviceResp) {
            $scope.Error = "Something went wrong ??";
        };

        $scope.cancel = function () {
            $state.go("Home");
        }

        $scope.Title = "Create User Trip";
        $scope.users = tripSubscriberService.availableTripSubscribers();
        $scope.trips = tripService.getTrips();
        $scope.save = function () {
            var user = $scope.selectedUser;
            var trip = $scope.selectedTrip;
            var userTrip = { UserId: $scope.selectedUser.id, TripId: $scope.selectedTrip.id, UserComments: $scope.userpost.userComments };
            //TODO:aggregate this logic to service as same like tripsbscrier,trip services
            $http.post('http://api.doactively.com/v1/UserTrip/', userTrip)
            .then(function (resp) {
                $scope.isSucess = true;
                var d = resp;
            }, function (error) {
                $scope.error = error;
            })
        }
    };
    app.controller("RegisterTripController", ["$scope", "$http", "tripService", "tripSubscriberService", RegisterTripController]);
}());