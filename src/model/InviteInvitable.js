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
 * The InviteInvitable model module.
 * @module model/InviteInvitable
 * @version 0.0.1
 */
class InviteInvitable {
    /**
     * Constructs a new <code>InviteInvitable</code>.
     * @alias module:model/InviteInvitable
     */
    constructor() { 
        
        InviteInvitable.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InviteInvitable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InviteInvitable} obj Optional instance to populate.
     * @return {module:model/InviteInvitable} The populated <code>InviteInvitable</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InviteInvitable();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
InviteInvitable.prototype['id'] = undefined;

/**
 * @member {String} type
 */
InviteInvitable.prototype['type'] = undefined;

/**
 * @member {String} image_url
 */
InviteInvitable.prototype['image_url'] = undefined;

/**
 * @member {String} name
 */
InviteInvitable.prototype['name'] = undefined;

/**
 * @member {String} description
 */
InviteInvitable.prototype['description'] = undefined;






export default InviteInvitable;

