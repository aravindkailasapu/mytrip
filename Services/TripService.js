(function () {
    var tripService = function ($http) {
        var myTripID = '35a12476-b7bf-4b74-a0a8-7f96b588f203';
        var tripIDs = [];
        var trips = [];
        tripIDs.push(myTripID);
        var createTrip = function (trip) {
            return $http.post('http://api.doactively.com/v1/Trip/', trip)
                .then(getTripObject).then(function (resp) { }, function (error) {
                    var error = error;
                })
        };
        
        var getTripObject = function (resp) {
            var da = resp;
            return $http.get(resp.data.links[0].href).then(function (resp) {
                trips.push(resp.data);
            }, function (error) {
                var error = error;
            })
        }
        var availableTrips = function (tripID) {
            tripIDs.push(myTripID);
        }
        var getTrips = function()
        {
            return trips;
        }
        return {
            createTrip: createTrip,
            availableTrips: availableTrips,
            getTrips: getTrips
        };
    };
    var module = angular.module("userTrip");
    module.factory("tripService", ["$http", tripService]);
}());