/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.2.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Metadata model module.
 * @module model/Metadata
 * @version 0.2.3
 */
class Metadata {
    /**
     * Constructs a new <code>Metadata</code>.
     * @alias module:model/Metadata
     */
    constructor() { 
        
        Metadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Metadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Metadata} obj Optional instance to populate.
     * @return {module:model/Metadata} The populated <code>Metadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Metadata();

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} title
 */
Metadata.prototype['title'] = undefined;

/**
 * @member {String} description
 */
Metadata.prototype['description'] = undefined;

/**
 * @member {String} image_url
 */
Metadata.prototype['image_url'] = undefined;






export default Metadata;

