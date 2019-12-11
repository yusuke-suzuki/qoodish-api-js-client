# QoodishApiJsClient.MapsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsGet**](MapsApi.md#mapsGet) | **GET** /maps | List Maps
[**mapsMapIdDelete**](MapsApi.md#mapsMapIdDelete) | **DELETE** /maps/{map_id} | Delete a Map
[**mapsMapIdGet**](MapsApi.md#mapsMapIdGet) | **GET** /maps/{map_id} | Get Map detail
[**mapsMapIdPut**](MapsApi.md#mapsMapIdPut) | **PUT** /maps/{map_id} | Update a Map
[**mapsPost**](MapsApi.md#mapsPost) | **POST** /maps | Create a new Map



## mapsGet

> [MapDetail] mapsGet(opts)

List Maps

List Maps. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.MapsApi();
let opts = {
  'active': true, // Boolean | Filter active maps with this option.
  'recommend': true, // Boolean | Filter recommend maps with this option.
  'recent': true, // Boolean | Filter recent maps with this option.
  'popular': true, // Boolean | Filter popular maps with this option.
  'postable': true, // Boolean | Filter postable maps with this option.
  'input': mapnametext // String | Search maps with map name.
};
apiInstance.mapsGet(opts, (error, data, response) => {
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
 **active** | **Boolean**| Filter active maps with this option. | [optional] 
 **recommend** | **Boolean**| Filter recommend maps with this option. | [optional] 
 **recent** | **Boolean**| Filter recent maps with this option. | [optional] 
 **popular** | **Boolean**| Filter popular maps with this option. | [optional] 
 **postable** | **Boolean**| Filter postable maps with this option. | [optional] 
 **input** | **String**| Search maps with map name. | [optional] 

### Return type

[**[MapDetail]**](MapDetail.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mapsMapIdDelete

> mapsMapIdDelete(mapId)

Delete a Map

Delete a Map. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.MapsApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdDelete(mapId, (error, data, response) => {
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

### Return type

null (empty response body)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## mapsMapIdGet

> MapDetail mapsMapIdGet(mapId)

Get Map detail

Get Map detail. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.MapsApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdGet(mapId, (error, data, response) => {
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


## mapsMapIdPut

> MapDetail mapsMapIdPut(mapId, newMap)

Update a Map

Update a new Map. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.MapsApi();
let mapId = 1; // Number | A valid Map ID.
let newMap = new QoodishApiJsClient.NewMap(); // NewMap | 
apiInstance.mapsMapIdPut(mapId, newMap, (error, data, response) => {
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
 **newMap** | [**NewMap**](NewMap.md)|  | 

### Return type

[**MapDetail**](MapDetail.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mapsPost

> MapDetail mapsPost(newMap)

Create a new Map

Create a new Map. 

### Example

```javascript
import QoodishApiJsClient from '@yusuke-suzuki/qoodish-api-js-client';
let defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApiJsClient.MapsApi();
let newMap = new QoodishApiJsClient.NewMap(); // NewMap | 
apiInstance.mapsPost(newMap, (error, data, response) => {
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
 **newMap** | [**NewMap**](NewMap.md)|  | 

### Return type

[**MapDetail**](MapDetail.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

