# qoodish_api

QoodishApi - JavaScript client for qoodish_api
Qoodih API. 
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.1
- Package version: 0.0.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install qoodish_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var QoodishApi = require('qoodish_api');

var defaultClient = QoodishApi.ApiClient.instance;
// Configure API key authorization: firebaseAuth
var firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new QoodishApi.DevicesApi()
var inlineObject1 = new QoodishApi.InlineObject1(); // {InlineObject1} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.devicesPost(inlineObject1, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.qoodish.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*QoodishApi.DevicesApi* | [**devicesPost**](docs/DevicesApi.md#devicesPost) | **POST** /devices | Register device
*QoodishApi.DevicesApi* | [**devicesRegistrationTokenDelete**](docs/DevicesApi.md#devicesRegistrationTokenDelete) | **DELETE** /devices/{registration_token} | Delete device
*QoodishApi.MapsApi* | [**mapsGet**](docs/MapsApi.md#mapsGet) | **GET** /maps | List Maps
*QoodishApi.MapsApi* | [**mapsMapIdDelete**](docs/MapsApi.md#mapsMapIdDelete) | **DELETE** /maps/{map_id} | Delete a Map
*QoodishApi.MapsApi* | [**mapsMapIdGet**](docs/MapsApi.md#mapsMapIdGet) | **GET** /maps/{map_id} | Get Map detail
*QoodishApi.MapsApi* | [**mapsMapIdPut**](docs/MapsApi.md#mapsMapIdPut) | **PUT** /maps/{map_id} | Update a Map
*QoodishApi.MapsApi* | [**mapsPost**](docs/MapsApi.md#mapsPost) | **POST** /maps | Create a new Map
*QoodishApi.PushNotificationApi* | [**usersUserIdPushNotificationDelete**](docs/PushNotificationApi.md#usersUserIdPushNotificationDelete) | **DELETE** /users/{user_id}/push_notification | Disable push notification
*QoodishApi.PushNotificationApi* | [**usersUserIdPushNotificationPost**](docs/PushNotificationApi.md#usersUserIdPushNotificationPost) | **POST** /users/{user_id}/push_notification | Enable push notification
*QoodishApi.UserMapsApi* | [**usersUserIdMapsGet**](docs/UserMapsApi.md#usersUserIdMapsGet) | **GET** /users/{user_id}/maps | Fetch user Maps
*QoodishApi.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /users | Search users
*QoodishApi.UsersApi* | [**usersPost**](docs/UsersApi.md#usersPost) | **POST** /users | Sign in
*QoodishApi.UsersApi* | [**usersUserIdDelete**](docs/UsersApi.md#usersUserIdDelete) | **DELETE** /users/{user_id} | Delete user account
*QoodishApi.UsersApi* | [**usersUserIdGet**](docs/UsersApi.md#usersUserIdGet) | **GET** /users/{user_id} | Get user profile
*QoodishApi.UsersApi* | [**usersUserIdPut**](docs/UsersApi.md#usersUserIdPut) | **PUT** /users/{user_id} | Update user profile


## Documentation for Models

 - [QoodishApi.CurrentUser](docs/CurrentUser.md)
 - [QoodishApi.InlineObject](docs/InlineObject.md)
 - [QoodishApi.InlineObject1](docs/InlineObject1.md)
 - [QoodishApi.MapDetail](docs/MapDetail.md)
 - [QoodishApi.MapDetailBase](docs/MapDetailBase.md)
 - [QoodishApi.NewMap](docs/NewMap.md)
 - [QoodishApi.NewUser](docs/NewUser.md)


## Documentation for Authorization


### firebaseAuth

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

