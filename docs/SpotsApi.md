# QoodishApi.SpotsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mapsMapIdSpotsGet**](SpotsApi.md#mapsMapIdSpotsGet) | **GET** /maps/{map_id}/spots | Fetch spots on map
[**spotsGet**](SpotsApi.md#spotsGet) | **GET** /spots | Fetch spots
[**spotsPlaceIdGet**](SpotsApi.md#spotsPlaceIdGet) | **GET** /spots/{place_id} | Fetch a spot



## mapsMapIdSpotsGet

> [Spot] mapsMapIdSpotsGet(mapId)

Fetch spots on map

Fetch spots on target map. 

### Example

```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.SpotsApi();
let mapId = 1; // Number | A valid Map ID.
apiInstance.mapsMapIdSpotsGet(mapId, (error, data, response) => {
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

[**[Spot]**](Spot.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## spotsGet

> [Spot] spotsGet(opts)

Fetch spots

Fetch spots. 

### Example

```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.SpotsApi();
let opts = {
  'popular': true // Boolean | Filter popular spots with this option.
};
apiInstance.spotsGet(opts, (error, data, response) => {
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
 **popular** | **Boolean**| Filter popular spots with this option. | [optional] 

### Return type

[**[Spot]**](Spot.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## spotsPlaceIdGet

> Spot spotsPlaceIdGet(placeId)

Fetch a spot

Fetch a spot. 

### Example

```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.SpotsApi();
let placeId = ChIJMxRrvBb-ml8RkRdpmMmn4WY; // String | A valid Place ID.
apiInstance.spotsPlaceIdGet(placeId, (error, data, response) => {
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
 **placeId** | **String**| A valid Place ID. | 

### Return type

[**Spot**](Spot.md)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

