# QoodishApi.DevicesApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devicesRegistrationTokenDelete**](DevicesApi.md#devicesRegistrationTokenDelete) | **DELETE** /devices/{registration_token} | Delete device
[**devicesRegistrationTokenPut**](DevicesApi.md#devicesRegistrationTokenPut) | **PUT** /devices/{registration_token} | Register device



## devicesRegistrationTokenDelete

> devicesRegistrationTokenDelete(registrationToken)

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
apiInstance.devicesRegistrationTokenDelete(registrationToken, (error, data, response) => {
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


## devicesRegistrationTokenPut

> devicesRegistrationTokenPut(registrationToken)

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
let registrationToken = 12345abcdef; // String | A valid registration token.
apiInstance.devicesRegistrationTokenPut(registrationToken, (error, data, response) => {
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

