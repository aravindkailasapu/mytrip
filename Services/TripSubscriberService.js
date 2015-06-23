(function () {
    var tripSubscriberService = function ($http) {
        var tripSubscribers = [];
        var createTripSubscriber = function (tripSubscriber) {
            return $http.post('http://api.doactively.com/v1/TripSubscriber/', tripSubscriber)
                .then(getTripSubscriber).then(function (resp) { }, function (error) {
                    var error = error;
                })
        };
        var availableTripSubscribers = function () {
            return tripSubscribers;
        }
        var getTripSubscriber = function (resp) {
            var da = resp;
            return $http.get(resp.data.links[0].href).then(function (resp) {
                tripSubscribers.push(resp.data);
            }, function (error) {
                var error = error;
            })
        }
        return {
            createTripSubscriber: createTripSubscriber,
            availableTripSubscribers: availableTripSubscribers
        };
    };
    angular.module("userTrip").factory("tripSubscriberService", ["$http", tripSubscriberService]);
}());