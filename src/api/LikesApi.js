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


import ApiClient from "../ApiClient";
import Like from '../model/Like';
import MapDetail from '../model/MapDetail';
import Review from '../model/Review';

/**
* Likes service.
* @module api/LikesApi
* @version 0.2.4
*/
export default class LikesApi {

    /**
    * Constructs a new LikesApi. 
    * @alias module:api/LikesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the mapsMapIdLikeDelete operation.
     * @callback module:api/LikesApi~mapsMapIdLikeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlike map
     * Unlike target map. 
     * @param {Number} mapId A valid Map ID.
     * @param {module:api/LikesApi~mapsMapIdLikeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapDetail}
     */
    mapsMapIdLikeDelete(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdLikeDelete");
      }

      let pathParams = {
        'map_id': mapId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MapDetail;
      return this.apiClient.callApi(
        '/maps/{map_id}/like', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsMapIdLikePost operation.
     * @callback module:api/LikesApi~mapsMapIdLikePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MapDetail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Like map
     * Like target map. 
     * @param {Number} mapId A valid Map ID.
     * @param {module:api/LikesApi~mapsMapIdLikePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MapDetail}
     */
    mapsMapIdLikePost(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdLikePost");
      }

      let pathParams = {
        'map_id': mapId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MapDetail;
      return this.apiClient.callApi(
        '/maps/{map_id}/like', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the mapsMapIdLikesGet operation.
     * @callback module:api/LikesApi~mapsMapIdLikesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Like>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch map likes
     * Fetch likes on Map
     * @param {Number} mapId A valid Map ID.
     * @param {module:api/LikesApi~mapsMapIdLikesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Like>}
     */
    mapsMapIdLikesGet(mapId, callback) {
      let postBody = null;
      // verify the required parameter 'mapId' is set
      if (mapId === undefined || mapId === null) {
        throw new Error("Missing the required parameter 'mapId' when calling mapsMapIdLikesGet");
      }

      let pathParams = {
        'map_id': mapId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Like];
      return this.apiClient.callApi(
        '/maps/{map_id}/likes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reviewsReviewIdCommentsCommentIdLikeDelete operation.
     * @callback module:api/LikesApi~reviewsReviewIdCommentsCommentIdLikeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Review} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlike review comment
     * Unlike target review comment. 
     * @param {Number} reviewId A valid Review ID.
     * @param {Number} commentId A valid Comment ID.
     * @param {module:api/LikesApi~reviewsReviewIdCommentsCommentIdLikeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Review}
     */
    reviewsReviewIdCommentsCommentIdLikeDelete(reviewId, commentId, callback) {
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewsReviewIdCommentsCommentIdLikeDelete");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reviewsReviewIdCommentsCommentIdLikeDelete");
      }

      let pathParams = {
        'review_id': reviewId,
        'comment_id': commentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Review;
      return this.apiClient.callApi(
        '/reviews/{review_id}/comments/{comment_id}/like', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reviewsReviewIdCommentsCommentIdLikePost operation.
     * @callback module:api/LikesApi~reviewsReviewIdCommentsCommentIdLikePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Review} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Like review comment
     * Like target review comment. 
     * @param {Number} reviewId A valid Review ID.
     * @param {Number} commentId A valid Comment ID.
     * @param {module:api/LikesApi~reviewsReviewIdCommentsCommentIdLikePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Review}
     */
    reviewsReviewIdCommentsCommentIdLikePost(reviewId, commentId, callback) {
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewsReviewIdCommentsCommentIdLikePost");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reviewsReviewIdCommentsCommentIdLikePost");
      }

      let pathParams = {
        'review_id': reviewId,
        'comment_id': commentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Review;
      return this.apiClient.callApi(
        '/reviews/{review_id}/comments/{comment_id}/like', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reviewsReviewIdCommentsCommentIdLikesGet operation.
     * @callback module:api/LikesApi~reviewsReviewIdCommentsCommentIdLikesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Like>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch comment likes
     * Fetch comment likes. 
     * @param {Number} reviewId A valid Review ID.
     * @param {Number} commentId A valid Comment ID.
     * @param {module:api/LikesApi~reviewsReviewIdCommentsCommentIdLikesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Like>}
     */
    reviewsReviewIdCommentsCommentIdLikesGet(reviewId, commentId, callback) {
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewsReviewIdCommentsCommentIdLikesGet");
      }
      // verify the required parameter 'commentId' is set
      if (commentId === undefined || commentId === null) {
        throw new Error("Missing the required parameter 'commentId' when calling reviewsReviewIdCommentsCommentIdLikesGet");
      }

      let pathParams = {
        'review_id': reviewId,
        'comment_id': commentId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Like];
      return this.apiClient.callApi(
        '/reviews/{review_id}/comments/{comment_id}/likes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reviewsReviewIdLikeDelete operation.
     * @callback module:api/LikesApi~reviewsReviewIdLikeDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Review} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlike review
     * Unlike target review. 
     * @param {Number} reviewId A valid Review ID.
     * @param {module:api/LikesApi~reviewsReviewIdLikeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Review}
     */
    reviewsReviewIdLikeDelete(reviewId, callback) {
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewsReviewIdLikeDelete");
      }

      let pathParams = {
        'review_id': reviewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Review;
      return this.apiClient.callApi(
        '/reviews/{review_id}/like', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reviewsReviewIdLikePost operation.
     * @callback module:api/LikesApi~reviewsReviewIdLikePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Review} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Like review
     * Like target review. 
     * @param {Number} reviewId A valid Review ID.
     * @param {module:api/LikesApi~reviewsReviewIdLikePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Review}
     */
    reviewsReviewIdLikePost(reviewId, callback) {
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewsReviewIdLikePost");
      }

      let pathParams = {
        'review_id': reviewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Review;
      return this.apiClient.callApi(
        '/reviews/{review_id}/like', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the reviewsReviewIdLikesGet operation.
     * @callback module:api/LikesApi~reviewsReviewIdLikesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Like>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch review likes
     * Fetch likes on Review
     * @param {Number} reviewId A valid Review ID.
     * @param {module:api/LikesApi~reviewsReviewIdLikesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Like>}
     */
    reviewsReviewIdLikesGet(reviewId, callback) {
      let postBody = null;
      // verify the required parameter 'reviewId' is set
      if (reviewId === undefined || reviewId === null) {
        throw new Error("Missing the required parameter 'reviewId' when calling reviewsReviewIdLikesGet");
      }

      let pathParams = {
        'review_id': reviewId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Like];
      return this.apiClient.callApi(
        '/reviews/{review_id}/likes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUserIdLikesGet operation.
     * @callback module:api/LikesApi~usersUserIdLikesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Like>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch user likes
     * Fetch likes by User
     * @param {Number} userId A valid User ID.
     * @param {module:api/LikesApi~usersUserIdLikesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Like>}
     */
    usersUserIdLikesGet(userId, callback) {
      let postBody = null;
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling usersUserIdLikesGet");
      }

      let pathParams = {
        'user_id': userId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['firebaseAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Like];
      return this.apiClient.callApi(
        '/users/{user_id}/likes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
