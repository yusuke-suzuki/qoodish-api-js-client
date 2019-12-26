/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The InappropreateContent model module.
 * @module model/InappropreateContent
 * @version 0.1.0
 */
class InappropreateContent {
    /**
     * Constructs a new <code>InappropreateContent</code>.
     * Map collaborator object.
     * @alias module:model/InappropreateContent
     */
    constructor() { 
        
        InappropreateContent.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InappropreateContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InappropreateContent} obj Optional instance to populate.
     * @return {module:model/InappropreateContent} The populated <code>InappropreateContent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InappropreateContent();

            if (data.hasOwnProperty('content_id')) {
                obj['content_id'] = ApiClient.convertToType(data['content_id'], 'Number');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = ApiClient.convertToType(data['content_type'], 'String');
            }
            if (data.hasOwnProperty('reason_id')) {
                obj['reason_id'] = ApiClient.convertToType(data['reason_id'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} content_id
 */
InappropreateContent.prototype['content_id'] = undefined;

/**
 * @member {String} content_type
 */
InappropreateContent.prototype['content_type'] = undefined;

/**
 * @member {Number} reason_id
 */
InappropreateContent.prototype['reason_id'] = undefined;






export default InappropreateContent;

