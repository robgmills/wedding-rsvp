angular.module('invite.service', []).factory('InviteService', ['$http', '$q', function($http, $q) {
    var baseUrl = '/api/invites';

    return {
        api : function(url, method, params, data) {
            const deferred = $q.defer();

            const req = {
                url: url,
                method: method,
                params: params,
                data: data
            };

            $http(req)
                .success(function(data, status, headers){
                    deferred.resolve(data, status, headers);
                })
                .error(function(data, status, headers) {
                    deferred.reject(data, status, headers);
                });

            return deferred.promise;
        },

        list : function() {
            return this.api(baseUrl, 'GET');
        },

        search : function(last, first) {
            const params = {last: last, first: first};
            const url = baseUrl + '/search'
            return this.api(url, 'GET', params);
        },

        get : function(id) {
            const url = baseUrl + '/' + id;
            return this.api(url, 'GET');
        },

        update : function(invite) {
            const url = baseUrl + '/' + invite._id;
            return this.api(url, 'PUT', {}, invite);
        }
    }
}]);