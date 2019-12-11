# QoodishApiJsClient.CollaboratorsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdCollaboratorsGet**](CollaboratorsApi.md#mapsMapIdCollaboratorsGet) | **GET** /maps/{map_id}/collaborators | Fetch collaborators



## mapsMapIdCollaboratorsGet

> [Collaborator] mapsMapIdCollaboratorsGet(mapId)

Fetch collaborators

Fetch collaborators on target map. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.CollaboratorsApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdCollaboratorsGet(mapId, (error, data, response) => {
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

[**[Collaborator]**](Collaborator.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

