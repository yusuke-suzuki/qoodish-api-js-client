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
 * The Spot model module.
 * @module model/Spot
 * @version 0.2.4
 */
class Spot {
    /**
     * Constructs a new <code>Spot</code>.
     * Spot detail object.
     * @alias module:model/Spot
     */
    constructor() { 
        
        Spot.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Spot</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Spot} obj Optional instance to populate.
     * @return {module:model/Spot} The populated <code>Spot</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Spot();

            if (data.hasOwnProperty('place_id')) {
                obj['place_id'] = ApiClient.convertToType(data['place_id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'String');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'String');
            }
            if (data.hasOwnProperty('formatted_address')) {
                obj['formatted_address'] = ApiClient.convertToType(data['formatted_address'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('opening_hours')) {
                obj['opening_hours'] = ApiClient.convertToType(data['opening_hours'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} place_id
 */
Spot.prototype['place_id'] = undefined;

/**
 * @member {String} name
 */
Spot.prototype['name'] = undefined;

/**
 * @member {String} lat
 */
Spot.prototype['lat'] = undefined;

/**
 * @member {String} lng
 */
Spot.prototype['lng'] = undefined;

/**
 * @member {String} formatted_address
 */
Spot.prototype['formatted_address'] = undefined;

/**
 * @member {String} url
 */
Spot.prototype['url'] = undefined;

/**
 * @member {String} opening_hours
 */
Spot.prototype['opening_hours'] = undefined;

/**
 * @member {String} image_url
 */
Spot.prototype['image_url'] = undefined;






export default Spot;

