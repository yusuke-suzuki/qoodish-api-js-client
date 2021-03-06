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

import ApiClient from '../ApiClient';

/**
 * The NewMap model module.
 * @module model/NewMap
 * @version 0.2.4
 */
class NewMap {
    /**
     * Constructs a new <code>NewMap</code>.
     * User created Map object.
     * @alias module:model/NewMap
     */
    constructor() { 
        
        NewMap.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewMap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewMap} obj Optional instance to populate.
     * @return {module:model/NewMap} The populated <code>NewMap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewMap();

            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('base_id')) {
                obj['base_id'] = ApiClient.convertToType(data['base_id'], 'String');
            }
            if (data.hasOwnProperty('base_name')) {
                obj['base_name'] = ApiClient.convertToType(data['base_name'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('invitable')) {
                obj['invitable'] = ApiClient.convertToType(data['invitable'], 'Boolean');
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} image_url
 */
NewMap.prototype['image_url'] = undefined;

/**
 * @member {String} name
 */
NewMap.prototype['name'] = undefined;

/**
 * @member {String} description
 */
NewMap.prototype['description'] = undefined;

/**
 * @member {String} base_id
 */
NewMap.prototype['base_id'] = undefined;

/**
 * @member {String} base_name
 */
NewMap.prototype['base_name'] = undefined;

/**
 * @member {Boolean} private
 */
NewMap.prototype['private'] = undefined;

/**
 * @member {Boolean} invitable
 */
NewMap.prototype['invitable'] = undefined;

/**
 * @member {Boolean} shared
 */
NewMap.prototype['shared'] = undefined;






export default NewMap;

