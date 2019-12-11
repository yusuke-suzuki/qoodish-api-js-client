# QoodishApi.IssueContentsApi

All URIs are relative to *https://api.qoodish.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**inappropriateContentsPost**](IssueContentsApi.md#inappropriateContentsPost) | **POST** /inappropriate_contents | Issue inappropriate content



## inappropriateContentsPost

> inappropriateContentsPost(inappropreateContent)

Issue inappropriate content

Issue inappropriate content. 

### Example

```javascript
import QoodishApi from 'qoodish_api';
let defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
let firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix = 'Token';

let apiInstance = new QoodishApi.IssueContentsApi();
let inappropreateContent = new QoodishApi.InappropreateContent(); // InappropreateContent | 
apiInstance.inappropriateContentsPost(inappropreateContent, (error, data, response) => {
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
 **inappropreateContent** | [**InappropreateContent**](InappropreateContent.md)|  | 

### Return type

null (empty response body)

### Authorization

[firebaseAuth](../README.md#firebaseAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined

