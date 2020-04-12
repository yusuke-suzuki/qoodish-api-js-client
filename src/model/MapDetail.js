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
import MapDetailBase from './MapDetailBase';

/**
 * The MapDetail model module.
 * @module model/MapDetail
 * @version 0.2.4
 */
class MapDetail {
    /**
     * Constructs a new <code>MapDetail</code>.
     * User created Map object.
     * @alias module:model/MapDetail
     */
    constructor() { 
        
        MapDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MapDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MapDetail} obj Optional instance to populate.
     * @return {module:model/MapDetail} The populated <code>MapDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MapDetail();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('owner_id')) {
                obj['owner_id'] = ApiClient.convertToType(data['owner_id'], 'Number');
            }
            if (data.hasOwnProperty('owner_name')) {
                obj['owner_name'] = ApiClient.convertToType(data['owner_name'], 'String');
            }
            if (data.hasOwnProperty('owner_image_url')) {
                obj['owner_image_url'] = ApiClient.convertToType(data['owner_image_url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('private')) {
                obj['private'] = ApiClient.convertToType(data['private'], 'Boolean');
            }
            if (data.hasOwnProperty('base')) {
                obj['base'] = MapDetailBase.constructFromObject(data['base']);
            }
            if (data.hasOwnProperty('liked')) {
                obj['liked'] = ApiClient.convertToType(data['liked'], 'Boolean');
            }
            if (data.hasOwnProperty('likes_count')) {
                obj['likes_count'] = ApiClient.convertToType(data['likes_count'], 'Number');
            }
            if (data.hasOwnProperty('following')) {
                obj['following'] = ApiClient.convertToType(data['following'], 'Boolean');
            }
            if (data.hasOwnProperty('followers_count')) {
                obj['followers_count'] = ApiClient.convertToType(data['followers_count'], 'Number');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('postable')) {
                obj['postable'] = ApiClient.convertToType(data['postable'], 'Boolean');
            }
            if (data.hasOwnProperty('shared')) {
                obj['shared'] = ApiClient.convertToType(data['shared'], 'Boolean');
            }
            if (data.hasOwnProperty('invitable')) {
                obj['invitable'] = ApiClient.convertToType(data['invitable'], 'Boolean');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('thumbnail_url')) {
                obj['thumbnail_url'] = ApiClient.convertToType(data['thumbnail_url'], 'String');
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
MapDetail.prototype['id'] = undefined;

/**
 * @member {Number} owner_id
 */
MapDetail.prototype['owner_id'] = undefined;

/**
 * @member {String} owner_name
 */
MapDetail.prototype['owner_name'] = undefined;

/**
 * @member {String} owner_image_url
 */
MapDetail.prototype['owner_image_url'] = undefined;

/**
 * @member {String} name
 */
MapDetail.prototype['name'] = undefined;

/**
 * @member {String} description
 */
MapDetail.prototype['description'] = undefined;

/**
 * @member {Boolean} private
 */
MapDetail.prototype['private'] = undefined;

/**
 * @member {module:model/MapDetailBase} base
 */
MapDetail.prototype['base'] = undefined;

/**
 * @member {Boolean} liked
 */
MapDetail.prototype['liked'] = undefined;

/**
 * @member {Number} likes_count
 */
MapDetail.prototype['likes_count'] = undefined;

/**
 * @member {Boolean} following
 */
MapDetail.prototype['following'] = undefined;

/**
 * @member {Number} followers_count
 */
MapDetail.prototype['followers_count'] = undefined;

/**
 * @member {Boolean} editable
 */
MapDetail.prototype['editable'] = undefined;

/**
 * @member {Boolean} postable
 */
MapDetail.prototype['postable'] = undefined;

/**
 * @member {Boolean} shared
 */
MapDetail.prototype['shared'] = undefined;

/**
 * @member {Boolean} invitable
 */
MapDetail.prototype['invitable'] = undefined;

/**
 * @member {String} image_url
 */
MapDetail.prototype['image_url'] = undefined;

/**
 * @member {String} thumbnail_url
 */
MapDetail.prototype['thumbnail_url'] = undefined;

/**
 * @member {String} created_at
 */
MapDetail.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
MapDetail.prototype['updated_at'] = undefined;






export default MapDetail;

