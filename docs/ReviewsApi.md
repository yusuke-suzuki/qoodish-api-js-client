# QoodishApiJsClient.ReviewsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdReviewsGet**](ReviewsApi.md#mapsMapIdReviewsGet) | **GET** /maps/{map_id}/reviews | Fetch map reviews
[**mapsMapIdReviewsPost**](ReviewsApi.md#mapsMapIdReviewsPost) | **POST** /maps/{map_id}/reviews | Create review
[**mapsMapIdReviewsReviewIdGet**](ReviewsApi.md#mapsMapIdReviewsReviewIdGet) | **GET** /maps/{map_id}/reviews/{review_id} | Fetch review
[**mapsMapIdSpotsPlaceIdReviewsGet**](ReviewsApi.md#mapsMapIdSpotsPlaceIdReviewsGet) | **GET** /maps/{map_id}/spots/{place_id}/reviews | Fetch reviews on spot
[**reviewsGet**](ReviewsApi.md#reviewsGet) | **GET** /reviews | Fetch reviews
[**reviewsReviewIdDelete**](ReviewsApi.md#reviewsReviewIdDelete) | **DELETE** /reviews/{review_id} | Delete review
[**reviewsReviewIdPut**](ReviewsApi.md#reviewsReviewIdPut) | **PUT** /reviews/{review_id} | Update review
[**spotsPlaceIdReviewsGet**](ReviewsApi.md#spotsPlaceIdReviewsGet) | **GET** /spots/{place_id}/reviews | Fetch spot reviews
[**usersUserIdReviewsGet**](ReviewsApi.md#usersUserIdReviewsGet) | **GET** /users/{user_id}/reviews | Fetch user reviews



## mapsMapIdReviewsGet

> [Review] mapsMapIdReviewsGet(mapId, opts)

Fetch map reviews

Fetch reviews on map. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let mapId = 1; // Number | A valid Map ID.
let opts = {
  'placeId': ml8RkRdpmMmn4WY // String | A valid Place ID.
};
apiInstance.mapsMapIdReviewsGet(mapId, opts, (error, data, response) => {
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
 **placeId** | **String**| A valid Place ID. | [optional] 

### Return type

[**[Review]**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsMapIdReviewsPost

> Review mapsMapIdReviewsPost(mapId, newReview)

Create review

Create a new review. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let mapId = 1; // Number | A valid Map ID.
let newReview = new QoodishApiJsClient.NewReview(); // NewReview | 
apiInstance.mapsMapIdReviewsPost(mapId, newReview, (error, data, response) => {
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
 **newReview** | [**NewReview**](NewReview.md)|  | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mapsMapIdReviewsReviewIdGet

> Review mapsMapIdReviewsReviewIdGet(mapId, reviewId)

Fetch review

Fetch a review. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let mapId = 1; // Number | A valid Map ID.
let reviewId = 1; // Number | A valid Review ID.
apiInstance.mapsMapIdReviewsReviewIdGet(mapId, reviewId, (error, data, response) => {
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
 **reviewId** | **Number**| A valid Review ID. | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsMapIdSpotsPlaceIdReviewsGet

> [Review] mapsMapIdSpotsPlaceIdReviewsGet(mapId, placeId)

Fetch reviews on spot

Fetch reviews on spot. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let mapId = 1; // Number | A valid Map ID.
let placeId = ml8RkRdpmMmn4WY; // String | A valid Place ID.
apiInstance.mapsMapIdSpotsPlaceIdReviewsGet(mapId, placeId, (error, data, response) => {
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
 **placeId** | **String**| A valid Place ID. | 

### Return type

[**[Review]**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsGet

> [Review] reviewsGet(opts)

Fetch reviews

Fetch reviews. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let opts = {
  'nextTimestamp': 2019-02-19T08:19:32.000Z, // String | Filter with timestamp.
  'recent': true // Boolean | Filter recent reviews with this option.
};
apiInstance.reviewsGet(opts, (error, data, response) => {
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
 **nextTimestamp** | **String**| Filter with timestamp. | [optional] 
 **recent** | **Boolean**| Filter recent reviews with this option. | [optional] 

### Return type

[**[Review]**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## reviewsReviewIdDelete

> reviewsReviewIdDelete(reviewId)

Delete review

Delete a review. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let reviewId = 1; // Number | A valid Review ID.
apiInstance.reviewsReviewIdDelete(reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **Number**| A valid Review ID. | 

### Return type

null (empty response body)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## reviewsReviewIdPut

> Review reviewsReviewIdPut(reviewId, newReview)

Update review

Update a review. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let reviewId = 1; // Number | A valid Review ID.
let newReview = new QoodishApiJsClient.NewReview(); // NewReview | 
apiInstance.reviewsReviewIdPut(reviewId, newReview, (error, data, response) => {
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
 **newReview** | [**NewReview**](NewReview.md)|  | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## spotsPlaceIdReviewsGet

> [Review] spotsPlaceIdReviewsGet(placeId)

Fetch spot reviews

Fetch spot reviews. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let placeId = 1; // String | A valid Place ID.
apiInstance.spotsPlaceIdReviewsGet(placeId, (error, data, response) => {
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
 **placeId** | **String**| A valid Place ID. | 

### Return type

[**[Review]**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUserIdReviewsGet

> [Review] usersUserIdReviewsGet(userId, opts)

Fetch user reviews

Fetch user reviews. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.ReviewsApi();
let userId = 1; // Number | A valid Map ID.
let opts = {
  'nextTimestamp': 2019-02-19T08:19:32.000Z // String | Filter with timestamp.
};
apiInstance.usersUserIdReviewsGet(userId, opts, (error, data, response) => {
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
 **userId** | **Number**| A valid Map ID. | 
 **nextTimestamp** | **String**| Filter with timestamp. | [optional] 

### Return type

[**[Review]**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

