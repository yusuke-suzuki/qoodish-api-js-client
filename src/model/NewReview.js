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
import ReviewImage from './ReviewImage';

/**
 * The NewReview model module.
 * @module model/NewReview
 * @version 0.2.4
 */
class NewReview {
    /**
     * Constructs a new <code>NewReview</code>.
     * New Review object.
     * @alias module:model/NewReview
     */
    constructor() { 
        
        NewReview.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NewReview</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NewReview} obj Optional instance to populate.
     * @return {module:model/NewReview} The populated <code>NewReview</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NewReview();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('place_id')) {
                obj['place_id'] = ApiClient.convertToType(data['place_id'], 'String');
            }
            if (data.hasOwnProperty('images')) {
                obj['images'] = ApiClient.convertToType(data['images'], [ReviewImage]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} comment
 */
NewReview.prototype['comment'] = undefined;

/**
 * @member {String} place_id
 */
NewReview.prototype['place_id'] = undefined;

/**
 * @member {Array.<module:model/ReviewImage>} images
 */
NewReview.prototype['images'] = undefined;






export default NewReview;

