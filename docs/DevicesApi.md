# QoodishApi.DevicesApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersDevicesPost**](DevicesApi.md#usersDevicesPost) | **POST** /users/devices | Register device
[**usersDevicesRegistrationTokenDelete**](DevicesApi.md#usersDevicesRegistrationTokenDelete) | **DELETE** /users/devices/{registration_token} | Delete device


<a name="usersDevicesPost"></a>
# **usersDevicesPost**
> usersDevicesPost(inlineObject1)

Register device

Register device with registration token.

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.DevicesApi();
let inlineObject1 = new QoodishApi.InlineObject1(); // InlineObject1 | 
apiInstance.usersDevicesPost(inlineObject1, (error, data, response) => {
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
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | 

### Return type

null (empty response body)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="usersDevicesRegistrationTokenDelete"></a>
# **usersDevicesRegistrationTokenDelete**
> usersDevicesRegistrationTokenDelete(registrationToken)

Delete device

Delete device with registration token.

### Example
```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.DevicesApi();
let registrationToken = 12345abcdef; // String | A valid registration token.
apiInstance.usersDevicesRegistrationTokenDelete(registrationToken, (error, data, response) => {
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
 **registrationToken** | **String**| A valid registration token. | 

### Return type

null (empty response body)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

