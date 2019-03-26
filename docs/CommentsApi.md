# QoodishApi.CommentsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviewsReviewIdCommentsCommentIdDelete**](CommentsApi.md#reviewsReviewIdCommentsCommentIdDelete) | **DELETE** /reviews/{review_id}/comments/{comment_id} | Delete review comment
[**reviewsReviewIdCommentsPost**](CommentsApi.md#reviewsReviewIdCommentsPost) | **POST** /reviews/{review_id}/comments | Send review comment


<a name="reviewsReviewIdCommentsCommentIdDelete"></a>
# **reviewsReviewIdCommentsCommentIdDelete**
> Review reviewsReviewIdCommentsCommentIdDelete(reviewId, commentId)

Delete review comment

Delete review comment. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.CommentsApi();
let reviewId = 1; // Number | A valid Review ID.
let commentId = 1; // Number | A valid Comment ID.
apiInstance.reviewsReviewIdCommentsCommentIdDelete(reviewId, commentId, (error, data, response) => {
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

<a name="reviewsReviewIdCommentsPost"></a>
# **reviewsReviewIdCommentsPost**
> Review reviewsReviewIdCommentsPost(reviewId, inlineObject)

Send review comment

Send review comment. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.CommentsApi();
let reviewId = 1; // Number | A valid Review ID.
let inlineObject = new QoodishApi.InlineObject(); // InlineObject | 
apiInstance.reviewsReviewIdCommentsPost(reviewId, inlineObject, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**Review**](Review.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

