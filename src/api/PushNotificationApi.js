/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import CurrentUser from '../model/CurrentUser';
import PushNotification from '../model/PushNotification';

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
     * Callback function to receive the result of the usersUserIdPushNotificationPut operation.
     * @callback module:api/PushNotificationApi~usersUserIdPushNotificationPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CurrentUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update push notification
     * Update push notification.
     * @param {Number} userId A valid User ID.
     * @param {module:model/PushNotification} pushNotification 
     * @param {module:api/PushNotificationApi~usersUserIdPushNotificationPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/CurrentUser}
     */
    usersUserIdPushNotificationPut(userId, pushNotification, callback) {
      let postBody = pushNotification;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersUserIdPushNotificationPut");
      }
      // verify the required parameter 'pushNotification' is set
      if (pushNotification === undefined || pushNotification === null) {
        throw new Error("Missing the required parameter 'pushNotification' when calling usersUserIdPushNotificationPut");
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
        '/users/{user_id}/push_notification', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
