/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Invite from '../model/Invite';
import NewInvite from '../model/NewInvite';

/**
* Invites service.
* @module api/InvitesApi
* @version 0.2.0
*/
export default class InvitesApi {

    /**
    * Constructs a new InvitesApi. 
    * @alias module:api/InvitesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the invitesGet operation.
     * @callback module:api/InvitesApi~invitesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Invite>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch invites
     * Fetch invites for Map.
     * @param {module:api/InvitesApi~invitesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Invite>}
     */
    invitesGet(callback) {
      let postBody = null;

      let pathParams = {
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
      let returnType = [Invite];
      return this.apiClient.callApi(
        '/invites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsMapIdInvitesPost operation.
     * @callback module:api/InvitesApi~mapsMapIdInvitesPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Send invite
     * Send invites for Map to User.
     * @param {Number} mapId A valid Map ID.
     * @param {module:model/NewInvite} newInvite 
     * @param {module:api/InvitesApi~mapsMapIdInvitesPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    mapsMapIdInvitesPost(mapId, newInvite, callback) {
      let postBody = newInvite;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdInvitesPost");
      }
      // verify the required parameter 'newInvite' is set
      if (newInvite === undefined || newInvite === null) {
        throw new Error("Missing the required parameter 'newInvite' when calling mapsMapIdInvitesPost");
      }

      let pathParams = {
        'map_id': mapId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/maps/{map_id}/invites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
