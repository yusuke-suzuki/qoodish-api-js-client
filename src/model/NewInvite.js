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
 * The NewInvite model module.
 * @module model/NewInvite
 * @version 0.2.4
 */
class NewInvite {
    /**
     * Constructs a new <code>NewInvite</code>.
     * New Invite object.
     * @alias module:model/NewInvite
     */
    constructor() { 
        
        NewInvite.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewInvite</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewInvite} obj Optional instance to populate.
     * @return {module:model/NewInvite} The populated <code>NewInvite</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewInvite();

            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} user_id
 */
NewInvite.prototype['user_id'] = undefined;






export default NewInvite;

