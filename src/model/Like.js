/**
 * Qoodish API
 * Qoodih API. 
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Author from './Author';

/**
 * The Like model module.
 * @module model/Like
 * @version 0.0.1
 */
class Like {
    /**
     * Constructs a new <code>Like</code>.
     * Like object.
     * @alias module:model/Like
     */
    constructor() { 
        
        Like.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Like</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Like} obj Optional instance to populate.
     * @return {module:model/Like} The populated <code>Like</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Like();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('voter')) {
                obj['voter'] = Author.constructFromObject(data['voter']);
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
Like.prototype['id'] = undefined;

/**
 * @member {module:model/Author} voter
 */
Like.prototype['voter'] = undefined;

/**
 * @member {String} created_at
 */
Like.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Like.prototype['updated_at'] = undefined;






export default Like;
