/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ReviewMap model module.
 * @module model/ReviewMap
 * @version 0.2.1
 */
class ReviewMap {
    /**
     * Constructs a new <code>ReviewMap</code>.
     * @alias module:model/ReviewMap
     */
    constructor() { 
        
        ReviewMap.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReviewMap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReviewMap} obj Optional instance to populate.
     * @return {module:model/ReviewMap} The populated <code>ReviewMap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReviewMap();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
ReviewMap.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ReviewMap.prototype['name'] = undefined;

/**
 * @member {Boolean} private
 */
ReviewMap.prototype['private'] = undefined;






export default ReviewMap;

