# QoodishApi.FollowsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdFollowDelete**](FollowsApi.md#mapsMapIdFollowDelete) | **DELETE** /maps/{map_id}/follow | Unfollow map
[**mapsMapIdFollowPost**](FollowsApi.md#mapsMapIdFollowPost) | **POST** /maps/{map_id}/follow | Follow map


<a name="mapsMapIdFollowDelete"></a>
# **mapsMapIdFollowDelete**
> MapDetail mapsMapIdFollowDelete(mapId)

Unfollow map

Unfollow target map. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.FollowsApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdFollowDelete(mapId, (error, data, response) => {
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

<a name="mapsMapIdFollowPost"></a>
# **mapsMapIdFollowPost**
> MapDetail mapsMapIdFollowPost(mapId, opts)

Follow map

Follow target map. 

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.FollowsApi();
let mapId = 1; // Number | A valid Map ID.
let opts = {
  'inviteId': 1 // String | Follow from invite.
};
apiInstance.mapsMapIdFollowPost(mapId, opts, (error, data, response) => {
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
 **inviteId** | **String**| Follow from invite. | [optional] 

### Return type

[**MapDetail**](MapDetail.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

