# QoodishApiJsClient.LikesApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdLikeDelete**](LikesApi.md#mapsMapIdLikeDelete) | **DELETE** /maps/{map_id}/like | Unlike map
[**mapsMapIdLikePost**](LikesApi.md#mapsMapIdLikePost) | **POST** /maps/{map_id}/like | Like map
[**mapsMapIdLikesGet**](LikesApi.md#mapsMapIdLikesGet) | **GET** /maps/{map_id}/likes | Fetch map likes
[**reviewsReviewIdCommentsCommentIdLikeDelete**](LikesApi.md#reviewsReviewIdCommentsCommentIdLikeDelete) | **DELETE** /reviews/{review_id}/comments/{comment_id}/like | Unlike review comment
[**reviewsReviewIdCommentsCommentIdLikePost**](LikesApi.md#reviewsReviewIdCommentsCommentIdLikePost) | **POST** /reviews/{review_id}/comments/{comment_id}/like | Like review comment
[**reviewsReviewIdCommentsCommentIdLikesGet**](LikesApi.md#reviewsReviewIdCommentsCommentIdLikesGet) | **GET** /reviews/{review_id}/comments/{comment_id}/likes | Fetch comment likes
[**reviewsReviewIdLikeDelete**](LikesApi.md#reviewsReviewIdLikeDelete) | **DELETE** /reviews/{review_id}/like | Unlike review
[**reviewsReviewIdLikePost**](LikesApi.md#reviewsReviewIdLikePost) | **POST** /reviews/{review_id}/like | Like review
[**reviewsReviewIdLikesGet**](LikesApi.md#reviewsReviewIdLikesGet) | **GET** /reviews/{review_id}/likes | Fetch review likes
[**usersUserIdLikesGet**](LikesApi.md#usersUserIdLikesGet) | **GET** /users/{user_id}/likes | Fetch user likes



## mapsMapIdLikeDelete

> MapDetail mapsMapIdLikeDelete(mapId)

Unlike map

Unlike target map. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdLikeDelete(mapId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **Number**| A valid Map ID. | 

### Return type

[**MapDetail**](MapDetail.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsMapIdLikePost

> MapDetail mapsMapIdLikePost(mapId)

Like map

Like target map. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdLikePost(mapId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **Number**| A valid Map ID. | 

### Return type

[**MapDetail**](MapDetail.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsMapIdLikesGet

> [Like] mapsMapIdLikesGet(mapId)

Fetch map likes

Fetch likes on Map

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdLikesGet(mapId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mapId** | **Number**| A valid Map ID. | 

### Return type

[**[Like]**](Like.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsReviewIdCommentsCommentIdLikeDelete

> Review reviewsReviewIdCommentsCommentIdLikeDelete(reviewId, commentId)

Unlike review comment

Unlike target review comment. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let reviewId = 1; // Number | A valid Review ID.
let commentId = 1; // Number | A valid Comment ID.
apiInstance.reviewsReviewIdCommentsCommentIdLikeDelete(reviewId, commentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| A valid Review ID. | 
 **commentId** | **Number**| A valid Comment ID. | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsReviewIdCommentsCommentIdLikePost

> Review reviewsReviewIdCommentsCommentIdLikePost(reviewId, commentId)

Like review comment

Like target review comment. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let reviewId = 1; // Number | A valid Review ID.
let commentId = 1; // Number | A valid Comment ID.
apiInstance.reviewsReviewIdCommentsCommentIdLikePost(reviewId, commentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| A valid Review ID. | 
 **commentId** | **Number**| A valid Comment ID. | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsReviewIdCommentsCommentIdLikesGet

> [Like] reviewsReviewIdCommentsCommentIdLikesGet(reviewId, commentId)

Fetch comment likes

Fetch comment likes. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let reviewId = 1; // Number | A valid Review ID.
let commentId = 1; // Number | A valid Comment ID.
apiInstance.reviewsReviewIdCommentsCommentIdLikesGet(reviewId, commentId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| A valid Review ID. | 
 **commentId** | **Number**| A valid Comment ID. | 

### Return type

[**[Like]**](Like.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsReviewIdLikeDelete

> Review reviewsReviewIdLikeDelete(reviewId)

Unlike review

Unlike target review. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let reviewId = 1; // Number | A valid Review ID.
apiInstance.reviewsReviewIdLikeDelete(reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| A valid Review ID. | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsReviewIdLikePost

> Review reviewsReviewIdLikePost(reviewId)

Like review

Like target review. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let reviewId = 1; // Number | A valid Review ID.
apiInstance.reviewsReviewIdLikePost(reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| A valid Review ID. | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsReviewIdLikesGet

> [Like] reviewsReviewIdLikesGet(reviewId)

Fetch review likes

Fetch likes on Review

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let reviewId = 1; // Number | A valid Review ID.
apiInstance.reviewsReviewIdLikesGet(reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| A valid Review ID. | 

### Return type

[**[Like]**](Like.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUserIdLikesGet

> [Like] usersUserIdLikesGet(userId)

Fetch user likes

Fetch likes by User

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.LikesApi();
let userId = 1; // Number | A valid User ID.
apiInstance.usersUserIdLikesGet(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| A valid User ID. | 

### Return type

[**[Like]**](Like.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

