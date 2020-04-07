/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.2.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Author model module.
 * @module model/Author
 * @version 0.2.2
 */
class Author {
    /**
     * Constructs a new <code>Author</code>.
     * Resource author object.
     * @alias module:model/Author
     */
    constructor() { 
        
        Author.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Author} obj Optional instance to populate.
     * @return {module:model/Author} The populated <code>Author</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Author();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('profile_image_url')) {
                obj['profile_image_url'] = ApiClient.convertToType(data['profile_image_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
Author.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Author.prototype['name'] = undefined;

/**
 * @member {String} profile_image_url
 */
Author.prototype['profile_image_url'] = undefined;






export default Author;

