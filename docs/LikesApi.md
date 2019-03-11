# QoodishApi.LikesApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdLikeDelete**](LikesApi.md#mapsMapIdLikeDelete) | **DELETE** /maps/{map_id}/like | Unlike map
[**mapsMapIdLikePost**](LikesApi.md#mapsMapIdLikePost) | **POST** /maps/{map_id}/like | Like map
[**mapsMapIdLikesGet**](LikesApi.md#mapsMapIdLikesGet) | **GET** /maps/{map_id}/likes | Fetch map likes
[**reviewsReviewIdCommentsCommentIdLikeDelete**](LikesApi.md#reviewsReviewIdCommentsCommentIdLikeDelete) | **DELETE** /reviews/{review_id}/comments/{comment_id}/like | Unlike review comment
[**reviewsReviewIdCommentsCommentIdLikePost**](LikesApi.md#reviewsReviewIdCommentsCommentIdLikePost) | **POST** /reviews/{review_id}/comments/{comment_id}/like | Like review comment
[**reviewsReviewIdLikeDelete**](LikesApi.md#reviewsReviewIdLikeDelete) | **DELETE** /reviews/{review_id}/like | Unlike review
[**reviewsReviewIdLikePost**](LikesApi.md#reviewsReviewIdLikePost) | **POST** /reviews/{review_id}/like | Like review
[**reviewsReviewIdLikesGet**](LikesApi.md#reviewsReviewIdLikesGet) | **GET** /reviews/{review_id}/likes | Fetch review likes
[**usersUserIdLikesGet**](LikesApi.md#usersUserIdLikesGet) | **GET** /users/{user_id}/likes | Fetch user likes


<a name="mapsMapIdLikeDelete"></a>
# **mapsMapIdLikeDelete**
> MapDetail mapsMapIdLikeDelete(mapId)

Unlike map

Unlike target map. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="mapsMapIdLikePost"></a>
# **mapsMapIdLikePost**
> MapDetail mapsMapIdLikePost(mapId)

Like map

Like target map. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="mapsMapIdLikesGet"></a>
# **mapsMapIdLikesGet**
> [Like] mapsMapIdLikesGet(mapId)

Fetch map likes

Fetch likes on Map

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="reviewsReviewIdCommentsCommentIdLikeDelete"></a>
# **reviewsReviewIdCommentsCommentIdLikeDelete**
> Review reviewsReviewIdCommentsCommentIdLikeDelete(reviewId, commentId)

Unlike review comment

Unlike target review comment. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="reviewsReviewIdCommentsCommentIdLikePost"></a>
# **reviewsReviewIdCommentsCommentIdLikePost**
> Review reviewsReviewIdCommentsCommentIdLikePost(reviewId, commentId)

Like review comment

Like target review comment. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="reviewsReviewIdLikeDelete"></a>
# **reviewsReviewIdLikeDelete**
> Review reviewsReviewIdLikeDelete(reviewId)

Unlike review

Unlike target review. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="reviewsReviewIdLikePost"></a>
# **reviewsReviewIdLikePost**
> Review reviewsReviewIdLikePost(reviewId)

Like review

Like target review. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="reviewsReviewIdLikesGet"></a>
# **reviewsReviewIdLikesGet**
> [Like] reviewsReviewIdLikesGet(reviewId)

Fetch review likes

Fetch likes on Review

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

<a name="usersUserIdLikesGet"></a>
# **usersUserIdLikesGet**
> [Like] usersUserIdLikesGet(userId)

Fetch user likes

Fetch likes by User

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.LikesApi();
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

