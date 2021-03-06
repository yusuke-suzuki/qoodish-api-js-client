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
import NewMap from '../model/NewMap';

/**
* Maps service.
* @module api/MapsApi
* @version 0.2.4
*/
export default class MapsApi {

    /**
    * Constructs a new MapsApi. 
    * @alias module:api/MapsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the mapsGet operation.
     * @callback module:api/MapsApi~mapsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MapDetail>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Maps
     * List Maps. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.active Filter active maps with this option.
     * @param {Boolean} opts.recommend Filter recommend maps with this option.
     * @param {Boolean} opts.recent Filter recent maps with this option.
     * @param {Boolean} opts.popular Filter popular maps with this option.
     * @param {Boolean} opts.postable Filter postable maps with this option.
     * @param {String} opts.input Search maps with map name.
     * @param {module:api/MapsApi~mapsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MapDetail>}
     */
    mapsGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'active': opts['active'],
        'recommend': opts['recommend'],
        'recent': opts['recent'],
        'popular': opts['popular'],
        'postable': opts['postable'],
        'input': opts['input']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [MapDetail];
      return this.apiClient.callApi(
        '/maps', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsMapIdDelete operation.
     * @callback module:api/MapsApi~mapsMapIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Map
     * Delete a Map. 
     * @param {Number} mapId A valid Map ID.
     * @param {module:api/MapsApi~mapsMapIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    mapsMapIdDelete(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdDelete");
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
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/maps/{map_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsMapIdGet operation.
     * @callback module:api/MapsApi~mapsMapIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Map detail
     * Get Map detail. 
     * @param {Number} mapId A valid Map ID.
     * @param {module:api/MapsApi~mapsMapIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapDetail}
     */
    mapsMapIdGet(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdGet");
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
        '/maps/{map_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsMapIdPut operation.
     * @callback module:api/MapsApi~mapsMapIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Map
     * Update a new Map. 
     * @param {Number} mapId A valid Map ID.
     * @param {module:model/NewMap} newMap 
     * @param {module:api/MapsApi~mapsMapIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapDetail}
     */
    mapsMapIdPut(mapId, newMap, callback) {
      let postBody = newMap;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdPut");
      }
      // verify the required parameter 'newMap' is set
      if (newMap === undefined || newMap === null) {
        throw new Error("Missing the required parameter 'newMap' when calling mapsMapIdPut");
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
      let accepts = ['application/json'];
      let returnType = MapDetail;
      return this.apiClient.callApi(
        '/maps/{map_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsPost operation.
     * @callback module:api/MapsApi~mapsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new Map
     * Create a new Map. 
     * @param {module:model/NewMap} newMap 
     * @param {module:api/MapsApi~mapsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapDetail}
     */
    mapsPost(newMap, callback) {
      let postBody = newMap;
      // verify the required parameter 'newMap' is set
      if (newMap === undefined || newMap === null) {
        throw new Error("Missing the required parameter 'newMap' when calling mapsPost");
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
      let returnType = MapDetail;
      return this.apiClient.callApi(
        '/maps', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
