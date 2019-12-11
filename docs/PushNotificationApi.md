# QoodishApi.PushNotificationApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserIdPushNotificationPut**](PushNotificationApi.md#usersUserIdPushNotificationPut) | **PUT** /users/{user_id}/push_notification | Update push notification



## usersUserIdPushNotificationPut

> CurrentUser usersUserIdPushNotificationPut(userId, pushNotification)

Update push notification

Update push notification.

### Example

```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.PushNotificationApi();
let userId = 1; // Number | A valid User ID.
let pushNotification = new QoodishApi.PushNotification(); // PushNotification | 
apiInstance.usersUserIdPushNotificationPut(userId, pushNotification, (error, data, response) => {
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
 **pushNotification** | [**PushNotification**](PushNotification.md)|  | 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

