# QoodishApi.PushNotificationApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUserIdPushNotificationDelete**](PushNotificationApi.md#usersUserIdPushNotificationDelete) | **DELETE** /users/{user_id}/push_notification | Disable push notification
[**usersUserIdPushNotificationPost**](PushNotificationApi.md#usersUserIdPushNotificationPost) | **POST** /users/{user_id}/push_notification | Enable push notification


<a name="usersUserIdPushNotificationDelete"></a>
# **usersUserIdPushNotificationDelete**
> CurrentUser usersUserIdPushNotificationDelete(userId)

Disable push notification

Disable push notification.

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
apiInstance.usersUserIdPushNotificationDelete(userId, (error, data, response) => {
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

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersUserIdPushNotificationPost"></a>
# **usersUserIdPushNotificationPost**
> CurrentUser usersUserIdPushNotificationPost(userId, inlineObject)

Enable push notification

Enable push notification.

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
let inlineObject = new QoodishApi.InlineObject(); // InlineObject | 
apiInstance.usersUserIdPushNotificationPost(userId, inlineObject, (error, data, response) => {
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

