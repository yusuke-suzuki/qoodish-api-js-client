# QoodishApiJsClient.UsersApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](UsersApi.md#usersGet) | **GET** /users | Search users
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Sign in
[**usersUserIdDelete**](UsersApi.md#usersUserIdDelete) | **DELETE** /users/{user_id} | Delete user account
[**usersUserIdGet**](UsersApi.md#usersUserIdGet) | **GET** /users/{user_id} | Get user profile
[**usersUserIdPut**](UsersApi.md#usersUserIdPut) | **PUT** /users/{user_id} | Update user profile



## usersGet

> [CurrentUser] usersGet(opts)

Search users

Search users with input text.

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.UsersApi();
let opts = {
  'input': username // String | Search users with user name.
};
apiInstance.usersGet(opts, (error, data, response) => {
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
 **input** | **String**| Search users with user name. | [optional] 

### Return type

[**[CurrentUser]**](CurrentUser.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersPost

> CurrentUser usersPost(newUser)

Sign in

Sign in and get profile of current user.

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.UsersApi();
let newUser = new QoodishApiJsClient.NewUser(); // NewUser | 
apiInstance.usersPost(newUser, (error, data, response) => {
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
 **newUser** | [**NewUser**](NewUser.md)|  | 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usersUserIdDelete

> usersUserIdDelete(userId)

Delete user account

Delete user account.

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.UsersApi();
let userId = 1; // Number | A valid User ID.
apiInstance.usersUserIdDelete(userId, (error, data, response) => {
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
 **userId** | **Number**| A valid User ID. | 

### Return type

null (empty response body)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## usersUserIdGet

> CurrentUser usersUserIdGet(userId)

Get user profile

Get profile of target user.

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.UsersApi();
let userId = 1; // Number | A valid User ID.
apiInstance.usersUserIdGet(userId, (error, data, response) => {
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


## usersUserIdPut

> CurrentUser usersUserIdPut(userId, newUser)

Update user profile

Update user profile.

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.UsersApi();
let userId = 1; // Number | A valid User ID.
let newUser = new QoodishApiJsClient.NewUser(); // NewUser | 
apiInstance.usersUserIdPut(userId, newUser, (error, data, response) => {
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
 **newUser** | [**NewUser**](NewUser.md)|  | 

### Return type

[**CurrentUser**](CurrentUser.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

