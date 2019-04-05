# QoodishApi.MetadataApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdMetadataGet**](MetadataApi.md#mapsMapIdMetadataGet) | **GET** /maps/{map_id}/metadata | Get Map metadata
[**reviewsReviewIdMetadataGet**](MetadataApi.md#reviewsReviewIdMetadataGet) | **GET** /reviews/{review_id}/metadata | Get Review metadata
[**spotsPlaceIdMetadataGet**](MetadataApi.md#spotsPlaceIdMetadataGet) | **GET** /spots/{place_id}/metadata | Get Spot metadata


<a name="mapsMapIdMetadataGet"></a>
# **mapsMapIdMetadataGet**
> Metadata mapsMapIdMetadataGet(mapId)

Get Map metadata

Get Map metadata. 

### Example
```javascript
import QoodishApi from 'qoodish_api';

let apiInstance = new QoodishApi.MetadataApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdMetadataGet(mapId, (error, data, response) => {
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

[**Metadata**](Metadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reviewsReviewIdMetadataGet"></a>
# **reviewsReviewIdMetadataGet**
> Metadata reviewsReviewIdMetadataGet(reviewId)

Get Review metadata

Get Review metadata. 

### Example
```javascript
import QoodishApi from 'qoodish_api';

let apiInstance = new QoodishApi.MetadataApi();
let reviewId = 1; // Number | A valid Review ID.
apiInstance.reviewsReviewIdMetadataGet(reviewId, (error, data, response) => {
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

[**Metadata**](Metadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="spotsPlaceIdMetadataGet"></a>
# **spotsPlaceIdMetadataGet**
> Metadata spotsPlaceIdMetadataGet(placeId)

Get Spot metadata

Get Spot metadata. 

### Example
```javascript
import QoodishApi from 'qoodish_api';

let apiInstance = new QoodishApi.MetadataApi();
let placeId = ml8RkRdpmMmn4WY; // String | A valid Place ID.
apiInstance.spotsPlaceIdMetadataGet(placeId, (error, data, response) => {
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

[**Metadata**](Metadata.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

