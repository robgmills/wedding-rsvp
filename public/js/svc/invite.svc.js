angular.module('invite.service', []).factory('InviteService', ['$http', '$q', function($http, $q) {
    return {
        list : function() {
            const deferred = $q.defer();
            console.log('InviteService#list - start');

            $http.get('/api/invites')
                .success(function(data, status, headers){
                    console.log(data);
                    deferred.resolve(data);
                    console.log(status);
                    console.log(headers);
                })
                .error(function(data, status, headers) {
                    deferred.reject(data, status, headers);
                });

            console.log('InviteService#list - end');
            return deferred.promise;
        },

        search : function(last, first) {
            throw Error('Not yet implemented!');
        },

        get : function(id) {
            return $http.get('/api/invites/' + id);
        },

        update : function() {
            throw Error('Not yet implemented!');
        }
    }
}]);