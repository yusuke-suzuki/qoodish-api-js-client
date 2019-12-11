# QoodishApiJsClient.PlacesApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**placesGet**](PlacesApi.md#placesGet) | **GET** /places | Fetch places



## placesGet

> [Place] placesGet(opts)

Fetch places

Fetch places. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.PlacesApi();
let opts = {
  'input': 弘前, // String | Filter places with input text.
  'lat': 35.7210375, // String | Search near by places.
  'lng': 139.711489 // String | Search near by places.
};
apiInstance.placesGet(opts, (error, data, response) => {
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
 **input** | **String**| Filter places with input text. | [optional] 
 **lat** | **String**| Search near by places. | [optional] 
 **lng** | **String**| Search near by places. | [optional] 

### Return type

[**[Place]**](Place.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

