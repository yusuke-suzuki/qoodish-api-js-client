# QoodishApi.LikesApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdLikeDelete**](LikesApi.md#mapsMapIdLikeDelete) | **DELETE** /maps/{map_id}/like | Unlike map
[**mapsMapIdLikePost**](LikesApi.md#mapsMapIdLikePost) | **POST** /maps/{map_id}/like | Like map


<a name="mapsMapIdLikeDelete"></a>
# **mapsMapIdLikeDelete**
> MapDetail mapsMapIdLikeDelete(mapId)

Unlike map

Unlike taret map. 

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

Like taret map. 

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

