(function () {
    var TripSubscriberController = function ($scope, tripSubscriberService,$state) {
        $scope.Title = "Create Trip Subscriber";
        $scope.isSucess = false;
        $scope.submitted = false;
        $scope.cancel = function () {
            $state.go("Home");
        }
        var defaultTripSubscriber = { userId: '  ', X_Email: '', X_UserName: '', profileImageURI: '' };
        $scope.save = function (isInValid) {
            $scope.submitted = true;
            if (isInValid) return;
            tripSubscriberService.createTripSubscriber($scope.tripSubscriber).then(
                function (data) {
                    $scope.tripSubscriber = defaultTripSubscriber;
                    $scope.isSucess = true;
                },
                function (error) {
                $scope.error = error;
            })
        };
    }
    app.controller("TripSubscriberController", TripSubscriberController);
}());