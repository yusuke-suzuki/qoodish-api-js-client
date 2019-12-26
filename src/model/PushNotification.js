/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PushNotification model module.
 * @module model/PushNotification
 * @version 0.0.1
 */
class PushNotification {
    /**
     * Constructs a new <code>PushNotification</code>.
     * @alias module:model/PushNotification
     */
    constructor() { 
        
        PushNotification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PushNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PushNotification} obj Optional instance to populate.
     * @return {module:model/PushNotification} The populated <code>PushNotification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PushNotification();

            if (data.hasOwnProperty('followed')) {
                obj['followed'] = ApiClient.convertToType(data['followed'], 'Boolean');
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
            if (data.hasOwnProperty('invited')) {
                obj['invited'] = ApiClient.convertToType(data['invited'], 'Boolean');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} followed
 */
PushNotification.prototype['followed'] = undefined;

/**
 * @member {Boolean} liked
 */
PushNotification.prototype['liked'] = undefined;

/**
 * @member {Boolean} invited
 */
PushNotification.prototype['invited'] = undefined;

/**
 * @member {Boolean} comment
 */
PushNotification.prototype['comment'] = undefined;






export default PushNotification;

