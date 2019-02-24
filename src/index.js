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


import ApiClient from './ApiClient';
import Collaborator from './model/Collaborator';
import CurrentUser from './model/CurrentUser';
import InappropreateContent from './model/InappropreateContent';
import InlineObject from './model/InlineObject';
import InlineObject1 from './model/InlineObject1';
import MapDetail from './model/MapDetail';
import MapDetailBase from './model/MapDetailBase';
import NewMap from './model/NewMap';
import NewUser from './model/NewUser';
import Place from './model/Place';
import Spot from './model/Spot';
import CollaboratorsApi from './api/CollaboratorsApi';
import DevicesApi from './api/DevicesApi';
import FollowsApi from './api/FollowsApi';
import IssueContentsApi from './api/IssueContentsApi';
import LikesApi from './api/LikesApi';
import MapsApi from './api/MapsApi';
import PlacesApi from './api/PlacesApi';
import PushNotificationApi from './api/PushNotificationApi';
import SpotsApi from './api/SpotsApi';
import UserMapsApi from './api/UserMapsApi';
import UsersApi from './api/UsersApi';


/**
* Qoodih_API_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var QoodishApi = require('index'); // See note below*.
* var xxxSvc = new QoodishApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new QoodishApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new QoodishApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new QoodishApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Collaborator model constructor.
     * @property {module:model/Collaborator}
     */
    Collaborator,

    /**
     * The CurrentUser model constructor.
     * @property {module:model/CurrentUser}
     */
    CurrentUser,

    /**
     * The InappropreateContent model constructor.
     * @property {module:model/InappropreateContent}
     */
    InappropreateContent,

    /**
     * The InlineObject model constructor.
     * @property {module:model/InlineObject}
     */
    InlineObject,

    /**
     * The InlineObject1 model constructor.
     * @property {module:model/InlineObject1}
     */
    InlineObject1,

    /**
     * The MapDetail model constructor.
     * @property {module:model/MapDetail}
     */
    MapDetail,

    /**
     * The MapDetailBase model constructor.
     * @property {module:model/MapDetailBase}
     */
    MapDetailBase,

    /**
     * The NewMap model constructor.
     * @property {module:model/NewMap}
     */
    NewMap,

    /**
     * The NewUser model constructor.
     * @property {module:model/NewUser}
     */
    NewUser,

    /**
     * The Place model constructor.
     * @property {module:model/Place}
     */
    Place,

    /**
     * The Spot model constructor.
     * @property {module:model/Spot}
     */
    Spot,

    /**
    * The CollaboratorsApi service constructor.
    * @property {module:api/CollaboratorsApi}
    */
    CollaboratorsApi,

    /**
    * The DevicesApi service constructor.
    * @property {module:api/DevicesApi}
    */
    DevicesApi,

    /**
    * The FollowsApi service constructor.
    * @property {module:api/FollowsApi}
    */
    FollowsApi,

    /**
    * The IssueContentsApi service constructor.
    * @property {module:api/IssueContentsApi}
    */
    IssueContentsApi,

    /**
    * The LikesApi service constructor.
    * @property {module:api/LikesApi}
    */
    LikesApi,

    /**
    * The MapsApi service constructor.
    * @property {module:api/MapsApi}
    */
    MapsApi,

    /**
    * The PlacesApi service constructor.
    * @property {module:api/PlacesApi}
    */
    PlacesApi,

    /**
    * The PushNotificationApi service constructor.
    * @property {module:api/PushNotificationApi}
    */
    PushNotificationApi,

    /**
    * The SpotsApi service constructor.
    * @property {module:api/SpotsApi}
    */
    SpotsApi,

    /**
    * The UserMapsApi service constructor.
    * @property {module:api/UserMapsApi}
    */
    UserMapsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
