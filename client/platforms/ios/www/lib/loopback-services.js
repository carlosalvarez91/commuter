(function(window, angular, undefined) {
    'use strict';

    var urlBase = "http://localhost:3000/api";
    var authHeader = 'authorization';

    /**
     * @ngdoc overview
     * @name lbServices
     * @module
     * @description
     *
     * The `lbServices` module provides services for interacting with
     * the models exposed by the LoopBack server via the REST API.
     *
     */
    var module = angular.module("lbServices", ['ngResource']);

    /**
     * @ngdoc object
     * @name lbServices.User
     * @object
     *
     * @description
     *
     * A $resource object for interacting with the `User` model.
     *
     * ## Example
     *
     * See
     * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
     * for an example of using this object.
     *
     */
    module.factory(
        "User",
        ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
            var R = Resource(
                urlBase + "/users/:id",
                { 'id': '@id' },
                {

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__findById__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__findById__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens/:fk",
                        method: "GET",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__destroyById__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Delete a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__destroyById__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens/:fk",
                        method: "DELETE",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__updateById__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Update a related item by id for accessTokens.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `fk` – `{*}` - Foreign key for accessTokens
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__updateById__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens/:fk",
                        method: "PUT",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__get__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Queries accessTokens of user.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `filter` – `{object=}` - 
                     *
                     * @param {Function(Array.<Object>, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__get__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens",
                        method: "GET",
                        isArray: true,
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__create__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Creates a new instance in accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$__create__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__delete__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Deletes all accessTokens of this model.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "prototype$__delete__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens",
                        method: "DELETE",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$__count__accessTokens
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Counts accessTokens of user.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` - 
                     */
                    "prototype$__count__accessTokens": {
                        url: urlBase + "/users/:id/accessTokens/count",
                        method: "GET",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#create
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Create a new instance of the model and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "create": {
                        url: urlBase + "/users",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#upsert
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Patch an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "upsert": {
                        url: urlBase + "/users",
                        method: "PUT",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#replaceOrCreate
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Replace an existing model instance or insert a new one into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "replaceOrCreate": {
                        url: urlBase + "/users/replaceOrCreate",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#upsertWithWhere
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Update an existing model instance or insert a new one into the data source based on the where criteria.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "upsertWithWhere": {
                        url: urlBase + "/users/upsertWithWhere",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#exists
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Check whether a model instance exists in the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `exists` – `{boolean=}` - 
                     */
                    "exists": {
                        url: urlBase + "/users/:id/exists",
                        method: "GET",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#findById
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find a model instance by {{id}} from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     *  - `filter` – `{object=}` - Filter defining fields and include
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "findById": {
                        url: urlBase + "/users/:id",
                        method: "GET",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#replaceById
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Replace attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "replaceById": {
                        url: urlBase + "/users/:id/replace",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#find
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find all instances of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {Function(Array.<Object>, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Array.<Object>} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "find": {
                        url: urlBase + "/users",
                        method: "GET",
                        isArray: true,
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#findOne
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Find first instance of the model matched by filter from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "findOne": {
                        url: urlBase + "/users/findOne",
                        method: "GET",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#updateAll
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Update instances of the model matched by {{where}} from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Information related to the outcome of the operation
                     */
                    "updateAll": {
                        url: urlBase + "/users/update",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#deleteById
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Delete a model instance by {{id}} from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - Model id
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "deleteById": {
                        url: urlBase + "/users/:id",
                        method: "DELETE",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#count
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Count instances of the model matched by where from the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `where` – `{object=}` - Criteria to match model instances
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `count` – `{number=}` - 
                     */
                    "count": {
                        url: urlBase + "/users/count",
                        method: "GET",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#prototype$updateAttributes
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Patch attributes for a model instance and persist it into the data source.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `id` – `{*}` - User id
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * <em>
                     * (The remote method definition does not provide any description.
                     * This usually means the response is a `User` object.)
                     * </em>
                     */
                    "prototype$updateAttributes": {
                        url: urlBase + "/users/:id",
                        method: "PUT",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#createChangeStream
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Create a change stream.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `options` – `{object=}` - 
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `changes` – `{ReadableStream=}` - 
                     */
                    "createChangeStream": {
                        url: urlBase + "/users/change-stream",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#login
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Login a user with username/email and password.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
                     *
                     *  - `rememberMe` - `boolean` - Whether the authentication credentials
                     *     should be remembered in localStorage across app/browser restarts.
                     *     Default: `true`.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * The response body contains properties of the AccessToken created on login.
                     * Depending on the value of `include` parameter, the body may contain additional properties:
                     * 
                     *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
                     * 
                     *
                     */
                    "login": {
                        url: urlBase + "/users/login",
                        method: "POST",
                        interceptor: {
                            response: function(response) {
                                var accessToken = response.data;
                                LoopBackAuth.currentUserId = accessToken.userId;
                                LoopBackAuth.accessTokenId = accessToken.id;
                                LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        }
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#logout
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Logout a user with access token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "logout": {
                        url: urlBase + "/users/logout",
                        method: "POST",
                        interceptor: {
                            response: function(response) {
                                LoopBackAuth.currentUserId = null;
                                LoopBackAuth.accessTokenId = null;
                                LoopBackAuth.save();
                                return response.resource;
                            }
                        }
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#confirm
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Confirm a user registration with email verification token.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *  - `uid` – `{string}` - 
                     *
                     *  - `token` – `{string}` - 
                     *
                     *  - `redirect` – `{string=}` - 
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "confirm": {
                        url: urlBase + "/users/confirm",
                        method: "GET",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#resetPassword
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Reset password for a user with email.
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     * This method expects a subset of model properties as request parameters.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * This method returns no data.
                     */
                    "resetPassword": {
                        url: urlBase + "/users/reset",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#updateBalance
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * <em>
                     * (The remote method definition does not provide any description.)
                     * </em>
                     *
                     * @param {Object=} parameters Request parameters.
                     *
                     *   This method does not accept any parameters.
                     *   Supply an empty object or omit this argument altogether.
                     *
                     * @param {Object} postData Request data.
                     *
                     *  - `ammount` – `{number=}` - 
                     *
                     * @param {Function(Object, Object)=} successCb
                     *   Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *   `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     *
                     * Data properties:
                     *
                     *  - `newBalance` – `{number=}` - 
                     */
                    "updateBalance": {
                        url: urlBase + "/users/updateBalance",
                        method: "POST",
                    },

                    /**
                     * @ngdoc method
                     * @name lbServices.User#getCurrent
                     * @methodOf lbServices.User
                     *
                     * @description
                     *
                     * Get data of the currently logged user. Fail with HTTP result 401
                     * when there is no user logged in.
                     *
                     * @param {Function(Object, Object)=} successCb
                     *    Success callback with two arguments: `value`, `responseHeaders`.
                     *
                     * @param {Function(Object)=} errorCb Error callback with one argument:
                     *    `httpResponse`.
                     *
                     * @return {Object} An empty reference that will be
                     *   populated with the actual data once the response is returned
                     *   from the server.
                     */
                    "getCurrent": {
                        url: urlBase + "/users/:id",
                        method: "GET",
                        params: {
                            id: function() {
                                var id = LoopBackAuth.currentUserId;
                                if (id == null) id = '__anonymous__';
                                return id;
                            }
                        },
                        __isGetCurrentUser__: true
                    }
                }
            );

            R["updateOrCreate"] = R["upsert"];

            R["update"] = R["updateAll"];

            R["destroyById"] = R["deleteById"];

            R["removeById"] = R["deleteById"];
            R.getCachedCurrent = function() {
                var data = LoopBackAuth.currentUserData;
                return data ? new R(data) : null;
            };
            R.isAuthenticated = function() {
                return this.getCurrentId() != null;
            };

            R.getCurrentId = function() {
                return LoopBackAuth.currentUserId;
            };
            R.modelName = "User";


            return R;
        }]);


    module
        .factory('LoopBackAuth', function() {
            var props = ['accessTokenId', 'currentUserId'];

            function LoopBackAuth() {
                var self = this;
                props.forEach(function(name) {
                    self[name] = load(name);
                });
                this.rememberMe = undefined;
            }

            LoopBackAuth.prototype.save = function() {
                var self = this;
                var storage = this.rememberMe ? localStorage : sessionStorage;
                props.forEach(function(name) {
                    save(storage, name, self[name]);
                });
            };

            return new LoopBackAuth();

            // Note: LocalStorage converts the value to string
            // We are using empty string as a marker for null/undefined values.
            function save(storage, name, value) {
                var key = '$LoopBack$' + name;
                if (value == null) value = '';
                storage[key] = value;
            }

            function load(name) {
                var key = '$LoopBack$' + name;
                return localStorage[key] || sessionStorage[key] || null;
            }
        })
        .config(['$httpProvider', function($httpProvider) {
            $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
        }])
        .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
            function($q, LoopBackAuth) {
                return {
                    'request': function(config) {
                        if (LoopBackAuth.accessTokenId) {
                            config.headers.authorization = LoopBackAuth.accessTokenId;
                        } else if (config.__isGetCurrentUser__) {
                            // Return a stub 401 error for User.getCurrent() when
                            // there is no user logged in
                            var res = {
                                body: { error: { status: 401 } },
                                status: 401,
                                config: config,
                                headers: function() { return undefined; }
                            };
                            return $q.reject(res);
                        }
                        return config || $q.when(config);
                    }
                }
            }])
        .factory('LoopBackResource', ['$resource', function($resource) {
            return function(url, params, actions) {
                var resource = $resource(url, params, actions);

                // Angular always calls POST on $save()
                // This hack is based on
                // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
                resource.prototype.$save = function(success, error) {
                    // Fortunately, LoopBack provides a convenient `upsert` method
                    // that exactly fits our needs.
                    var result = resource.upsert.call(this, {}, this, success, error);
                    return result.$promise || result;
                }

                return resource;
            };
        }]);

})(window, window.angular);