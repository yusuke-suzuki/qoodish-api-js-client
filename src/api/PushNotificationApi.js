/**
 * Qoodish API
 * Qoodih API. 
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CurrentUser from '../model/CurrentUser';
import InlineObject from '../model/InlineObject';

/**
* PushNotification service.
* @module api/PushNotificationApi
* @version 0.0.1
*/
export default class PushNotificationApi {

    /**
    * Constructs a new PushNotificationApi. 
    * @alias module:api/PushNotificationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the usersUserIdPushNotificationDelete operation.
     * @callback module:api/PushNotificationApi~usersUserIdPushNotificationDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable push notification
     * Disable push notification.
     * @param {Number} userId A valid User ID.
     * @param {module:api/PushNotificationApi~usersUserIdPushNotificationDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentUser}
     */
    usersUserIdPushNotificationDelete(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersUserIdPushNotificationDelete");
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
        '/users/{user_id}/push_notification', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUserIdPushNotificationPost operation.
     * @callback module:api/PushNotificationApi~usersUserIdPushNotificationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable push notification
     * Enable push notification.
     * @param {Number} userId A valid User ID.
     * @param {module:model/InlineObject} inlineObject 
     * @param {module:api/PushNotificationApi~usersUserIdPushNotificationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentUser}
     */
    usersUserIdPushNotificationPost(userId, inlineObject, callback) {
      let postBody = inlineObject;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersUserIdPushNotificationPost");
      }
      // verify the required parameter 'inlineObject' is set
      if (inlineObject === undefined || inlineObject === null) {
        throw new Error("Missing the required parameter 'inlineObject' when calling usersUserIdPushNotificationPost");
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
        '/users/{user_id}/push_notification', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
