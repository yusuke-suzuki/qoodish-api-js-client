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
 * The Collaborator model module.
 * @module model/Collaborator
 * @version 0.0.1
 */
class Collaborator {
    /**
     * Constructs a new <code>Collaborator</code>.
     * Map collaborator object.
     * @alias module:model/Collaborator
     */
    constructor() { 
        
        Collaborator.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Collaborator</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Collaborator} obj Optional instance to populate.
     * @return {module:model/Collaborator} The populated <code>Collaborator</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Collaborator();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('profile_image_url')) {
                obj['profile_image_url'] = ApiClient.convertToType(data['profile_image_url'], 'String');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = ApiClient.convertToType(data['owner'], 'Boolean');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Collaborator.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Collaborator.prototype['name'] = undefined;

/**
 * @member {String} profile_image_url
 */
Collaborator.prototype['profile_image_url'] = undefined;

/**
 * @member {Boolean} owner
 */
Collaborator.prototype['owner'] = undefined;

/**
 * @member {Boolean} editable
 */
Collaborator.prototype['editable'] = undefined;

/**
 * @member {String} created_at
 */
Collaborator.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Collaborator.prototype['updated_at'] = undefined;






export default Collaborator;

