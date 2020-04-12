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
 * The ReviewImage model module.
 * @module model/ReviewImage
 * @version 0.2.4
 */
class ReviewImage {
    /**
     * Constructs a new <code>ReviewImage</code>.
     * Review image object.
     * @alias module:model/ReviewImage
     */
    constructor() { 
        
        ReviewImage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReviewImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReviewImage} obj Optional instance to populate.
     * @return {module:model/ReviewImage} The populated <code>ReviewImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReviewImage();

            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} url
 */
ReviewImage.prototype['url'] = undefined;

/**
 * @member {String} thumbnail_url
 */
ReviewImage.prototype['thumbnail_url'] = undefined;






export default ReviewImage;

