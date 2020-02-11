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
 * The NotificationNotifiable model module.
 * @module model/NotificationNotifiable
 * @version 0.2.1
 */
class NotificationNotifiable {
    /**
     * Constructs a new <code>NotificationNotifiable</code>.
     * @alias module:model/NotificationNotifiable
     */
    constructor() { 
        
        NotificationNotifiable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NotificationNotifiable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationNotifiable} obj Optional instance to populate.
     * @return {module:model/NotificationNotifiable} The populated <code>NotificationNotifiable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationNotifiable();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
NotificationNotifiable.prototype['id'] = undefined;

/**
 * @member {String} type
 */
NotificationNotifiable.prototype['type'] = undefined;

/**
 * @member {String} thumbnail_url
 */
NotificationNotifiable.prototype['thumbnail_url'] = undefined;






export default NotificationNotifiable;

