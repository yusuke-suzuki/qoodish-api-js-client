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
import MapDetail from '../model/MapDetail';

/**
* Follows service.
* @module api/FollowsApi
* @version 0.2.4
*/
export default class FollowsApi {

    /**
    * Constructs a new FollowsApi. 
    * @alias module:api/FollowsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the mapsMapIdFollowDelete operation.
     * @callback module:api/FollowsApi~mapsMapIdFollowDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unfollow map
     * Unfollow target map. 
     * @param {Number} mapId A valid Map ID.
     * @param {module:api/FollowsApi~mapsMapIdFollowDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapDetail}
     */
    mapsMapIdFollowDelete(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdFollowDelete");
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
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MapDetail;
      return this.apiClient.callApi(
        '/maps/{map_id}/follow', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsMapIdFollowPost operation.
     * @callback module:api/FollowsApi~mapsMapIdFollowPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Follow map
     * Follow target map. 
     * @param {Number} mapId A valid Map ID.
     * @param {Object} opts Optional parameters
     * @param {String} opts.inviteId Follow from invite.
     * @param {module:api/FollowsApi~mapsMapIdFollowPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapDetail}
     */
    mapsMapIdFollowPost(mapId, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdFollowPost");
      }

      let pathParams = {
        'map_id': mapId
      };
      let queryParams = {
        'invite_id': opts['inviteId']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MapDetail;
      return this.apiClient.callApi(
        '/maps/{map_id}/follow', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
