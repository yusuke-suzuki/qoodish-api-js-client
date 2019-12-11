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
import Place from '../model/Place';

/**
* Places service.
* @module api/PlacesApi
* @version 0.0.1
*/
export default class PlacesApi {

    /**
    * Constructs a new PlacesApi. 
    * @alias module:api/PlacesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the placesGet operation.
     * @callback module:api/PlacesApi~placesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Place>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch places
     * Fetch places. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.input Filter places with input text.
     * @param {String} opts.lat Search near by places.
     * @param {String} opts.lng Search near by places.
     * @param {module:api/PlacesApi~placesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Place>}
     */
    placesGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'input': opts['input'],
        'lat': opts['lat'],
        'lng': opts['lng']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Place];
      return this.apiClient.callApi(
        '/places', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
