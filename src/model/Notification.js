/**
 * Qoodish API
 * Qoodish API JavaScript Client. 
 *
 * The version of the OpenAPI document: 0.2.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Author from './Author';
import NotificationNotifiable from './NotificationNotifiable';

/**
 * The Notification model module.
 * @module model/Notification
 * @version 0.2.1
 */
class Notification {
    /**
     * Constructs a new <code>Notification</code>.
     * Notification object.
     * @alias module:model/Notification
     */
    constructor() { 
        
        Notification.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Notification();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('click_action')) {
                obj['click_action'] = ApiClient.convertToType(data['click_action'], 'String');
            }
            if (data.hasOwnProperty('notifiable')) {
                obj['notifiable'] = NotificationNotifiable.constructFromObject(data['notifiable']);
            }
            if (data.hasOwnProperty('notifier')) {
                obj['notifier'] = Author.constructFromObject(data['notifier']);
            }
            if (data.hasOwnProperty('read')) {
                obj['read'] = ApiClient.convertToType(data['read'], 'Boolean');
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
Notification.prototype['id'] = undefined;

/**
 * @member {String} key
 */
Notification.prototype['key'] = undefined;

/**
 * @member {String} click_action
 */
Notification.prototype['click_action'] = undefined;

/**
 * @member {module:model/NotificationNotifiable} notifiable
 */
Notification.prototype['notifiable'] = undefined;

/**
 * @member {module:model/Author} notifier
 */
Notification.prototype['notifier'] = undefined;

/**
 * @member {Boolean} read
 */
Notification.prototype['read'] = undefined;

/**
 * @member {String} created_at
 */
Notification.prototype['created_at'] = undefined;

/**
 * @member {String} updated_at
 */
Notification.prototype['updated_at'] = undefined;






export default Notification;

