/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.2.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CurrentUser from '../model/CurrentUser';
import NewUser from '../model/NewUser';

/**
* Users service.
* @module api/UsersApi
* @version 0.2.4
*/
export default class UsersApi {

    /**
    * Constructs a new UsersApi. 
    * @alias module:api/UsersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the usersGet operation.
     * @callback module:api/UsersApi~usersGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/CurrentUser>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search users
     * Search users with input text.
     * @param {Object} opts Optional parameters
     * @param {String} opts.input Search users with user name.
     * @param {module:api/UsersApi~usersGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/CurrentUser>}
     */
    usersGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'input': opts['input']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [CurrentUser];
      return this.apiClient.callApi(
        '/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/UsersApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sign in
     * Sign in and get profile of current user.
     * @param {module:model/NewUser} newUser 
     * @param {module:api/UsersApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentUser}
     */
    usersPost(newUser, callback) {
      let postBody = newUser;
      // verify the required parameter 'newUser' is set
      if (newUser === undefined || newUser === null) {
        throw new Error("Missing the required parameter 'newUser' when calling usersPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CurrentUser;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUserIdDelete operation.
     * @callback module:api/UsersApi~usersUserIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete user account
     * Delete user account.
     * @param {Number} userId A valid User ID.
     * @param {module:api/UsersApi~usersUserIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    usersUserIdDelete(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersUserIdDelete");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/users/{user_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUserIdGet operation.
     * @callback module:api/UsersApi~usersUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user profile
     * Get profile of target user.
     * @param {Number} userId A valid User ID.
     * @param {module:api/UsersApi~usersUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentUser}
     */
    usersUserIdGet(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersUserIdGet");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = CurrentUser;
      return this.apiClient.callApi(
        '/users/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUserIdPut operation.
     * @callback module:api/UsersApi~usersUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user profile
     * Update user profile.
     * @param {Number} userId A valid User ID.
     * @param {module:model/NewUser} newUser 
     * @param {module:api/UsersApi~usersUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentUser}
     */
    usersUserIdPut(userId, newUser, callback) {
      let postBody = newUser;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersUserIdPut");
      }
      // verify the required parameter 'newUser' is set
      if (newUser === undefined || newUser === null) {
        throw new Error("Missing the required parameter 'newUser' when calling usersUserIdPut");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CurrentUser;
      return this.apiClient.callApi(
        '/users/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
