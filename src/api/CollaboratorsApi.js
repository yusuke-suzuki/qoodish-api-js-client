/**
 * Qoodish API
 * Qoodih API. 
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
import Collaborator from '../model/Collaborator';

/**
* Collaborators service.
* @module api/CollaboratorsApi
* @version 0.0.1
*/
export default class CollaboratorsApi {

    /**
    * Constructs a new CollaboratorsApi. 
    * @alias module:api/CollaboratorsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the mapsMapIdCollaboratorsGet operation.
     * @callback module:api/CollaboratorsApi~mapsMapIdCollaboratorsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Collaborator>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch collaborators
     * Fetch collaborators on target map. 
     * @param {Number} mapId A valid Map ID.
     * @param {module:api/CollaboratorsApi~mapsMapIdCollaboratorsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Collaborator>}
     */
    mapsMapIdCollaboratorsGet(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdCollaboratorsGet");
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
      let returnType = [Collaborator];
      return this.apiClient.callApi(
        '/maps/{map_id}/collaborators', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
