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
            var res = this.api(baseUrl, 'GET');
            return res;
        },

        search : function(last, first) {
            const params = {last: last, first: first};
            const url = baseUrl + '/search'
            var res = this.api(url, 'GET', params);
            return res;
        },

        get : function(id) {
            return $http.get('/api/invites/' + id);
        },

        update : function() {
            throw Error('Not yet implemented!');
        }
    }
}]);