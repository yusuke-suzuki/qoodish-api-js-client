/**
 * Qoodish API
 * Qoodih API. 
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
import Author from './Author';
import Comment from './Comment';
import ReviewImage from './ReviewImage';
import ReviewMap from './ReviewMap';
import Spot from './Spot';

/**
 * The Review model module.
 * @module model/Review
 * @version 0.0.1
 */
class Review {
    /**
     * Constructs a new <code>Review</code>.
     * User created Review object.
     * @alias module:model/Review
     */
    constructor() { 
        
        Review.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Review</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Review} obj Optional instance to populate.
     * @return {module:model/Review} The populated <code>Review</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Review();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('place_id')) {
                obj['place_id'] = ApiClient.convertToType(data['place_id'], 'String');
            }
            if (data.hasOwnProperty('author')) {
                obj['author'] = Author.constructFromObject(data['author']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('comments')) {
                obj['comments'] = ApiClient.convertToType(data['comments'], [Comment]);
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ReviewImage.constructFromObject(data['image']);
            }
            if (data.hasOwnProperty('spot')) {
                obj['spot'] = Spot.constructFromObject(data['spot']);
            }
            if (data.hasOwnProperty('map')) {
                obj['map'] = ReviewMap.constructFromObject(data['map']);
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
            if (data.hasOwnProperty('likes_count')) {
                obj['likes_count'] = ApiClient.convertToType(data['likes_count'], 'Number');
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
Review.prototype['id'] = undefined;

/**
 * @member {String} place_id
 */
Review.prototype['place_id'] = undefined;

/**
 * @member {module:model/Author} author
 */
Review.prototype['author'] = undefined;

/**
 * @member {String} comment
 */
Review.prototype['comment'] = undefined;

/**
 * @member {Array.<module:model/Comment>} comments
 */
Review.prototype['comments'] = undefined;

/**
 * @member {module:model/ReviewImage} image
 */
Review.prototype['image'] = undefined;

/**
 * @member {module:model/Spot} spot
 */
Review.prototype['spot'] = undefined;

/**
 * @member {module:model/ReviewMap} map
 */
Review.prototype['map'] = undefined;

/**
 * @member {Boolean} editable
 */
Review.prototype['editable'] = undefined;

/**
 * @member {Boolean} liked
 */
Review.prototype['liked'] = undefined;

/**
 * @member {Number} likes_count
 */
Review.prototype['likes_count'] = undefined;

/**
 * @member {String} created_at
 */
Review.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Review.prototype['updated_at'] = undefined;






export default Review;

