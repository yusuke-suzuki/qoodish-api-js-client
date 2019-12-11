# QoodishApiJsClient.UserMapsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserIdMapsGet**](UserMapsApi.md#usersUserIdMapsGet) | **GET** /users/{user_id}/maps | Fetch user Maps



## usersUserIdMapsGet

> [MapDetail] usersUserIdMapsGet(userId, opts)

Fetch user Maps

Fetch user created Maps. 

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.UserMapsApi();
let userId = 1; // Number | A valid User ID.
let opts = {
  'following': true // Boolean | Filter following maps with this option.
};
apiInstance.usersUserIdMapsGet(userId, opts, (error, data, response) => {
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
 **following** | **Boolean**| Filter following maps with this option. | [optional] 

### Return type

[**[MapDetail]**](MapDetail.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

