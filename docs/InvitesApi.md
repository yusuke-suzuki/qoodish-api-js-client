# QoodishApiJsClient.InvitesApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invitesGet**](InvitesApi.md#invitesGet) | **GET** /invites | Fetch invites
[**mapsMapIdInvitesPost**](InvitesApi.md#mapsMapIdInvitesPost) | **POST** /maps/{map_id}/invites | Send invite



## invitesGet

> [Invite] invitesGet()

Fetch invites

Fetch invites for Map.

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.InvitesApi();
apiInstance.invitesGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Invite]**](Invite.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsMapIdInvitesPost

> mapsMapIdInvitesPost(mapId, newInvite)

Send invite

Send invites for Map to User.

### Example

```javascript
import QoodishApiJsClient from 'qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.InvitesApi();
let mapId = 1; // Number | A valid Map ID.
let newInvite = new QoodishApiJsClient.NewInvite(); // NewInvite | 
apiInstance.mapsMapIdInvitesPost(mapId, newInvite, (error, data, response) => {
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
 **mapId** | **Number**| A valid Map ID. | 
 **newInvite** | [**NewInvite**](NewInvite.md)|  | 

### Return type

null (empty response body)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

