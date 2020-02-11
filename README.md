# @yusuke-suzuki/qoodish-api-js-client

QoodishApiJsClient - JavaScript client for @yusuke-suzuki/qoodish-api-js-client
Qoodish API JavaScript Client. 
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.2.1
- Package version: 0.2.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install @yusuke-suzuki/qoodish-api-js-client --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your @yusuke-suzuki/qoodish-api-js-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
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
var QoodishApiJsClient = require('@yusuke-suzuki/qoodish-api-js-client');

var defaultClient = QoodishApiJsClient.ApiClient.instance;
// Configure API key authorization: firebaseAuth
var firebaseAuth = defaultClient.authentications['firebaseAuth'];
firebaseAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//firebaseAuth.apiKeyPrefix['Authorization'] = "Token"

var api = new QoodishApiJsClient.CollaboratorsApi()
var mapId = 1; // {Number} A valid Map ID.
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.mapsMapIdCollaboratorsGet(mapId, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.qoodish.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*QoodishApiJsClient.CollaboratorsApi* | [**mapsMapIdCollaboratorsGet**](docs/CollaboratorsApi.md#mapsMapIdCollaboratorsGet) | **GET** /maps/{map_id}/collaborators | Fetch collaborators
*QoodishApiJsClient.CommentsApi* | [**reviewsReviewIdCommentsCommentIdDelete**](docs/CommentsApi.md#reviewsReviewIdCommentsCommentIdDelete) | **DELETE** /reviews/{review_id}/comments/{comment_id} | Delete review comment
*QoodishApiJsClient.CommentsApi* | [**reviewsReviewIdCommentsPost**](docs/CommentsApi.md#reviewsReviewIdCommentsPost) | **POST** /reviews/{review_id}/comments | Send review comment
*QoodishApiJsClient.DevicesApi* | [**devicesRegistrationTokenDelete**](docs/DevicesApi.md#devicesRegistrationTokenDelete) | **DELETE** /devices/{registration_token} | Delete device
*QoodishApiJsClient.DevicesApi* | [**devicesRegistrationTokenPut**](docs/DevicesApi.md#devicesRegistrationTokenPut) | **PUT** /devices/{registration_token} | Register device
*QoodishApiJsClient.FollowsApi* | [**mapsMapIdFollowDelete**](docs/FollowsApi.md#mapsMapIdFollowDelete) | **DELETE** /maps/{map_id}/follow | Unfollow map
*QoodishApiJsClient.FollowsApi* | [**mapsMapIdFollowPost**](docs/FollowsApi.md#mapsMapIdFollowPost) | **POST** /maps/{map_id}/follow | Follow map
*QoodishApiJsClient.InvitesApi* | [**invitesGet**](docs/InvitesApi.md#invitesGet) | **GET** /invites | Fetch invites
*QoodishApiJsClient.InvitesApi* | [**mapsMapIdInvitesPost**](docs/InvitesApi.md#mapsMapIdInvitesPost) | **POST** /maps/{map_id}/invites | Send invite
*QoodishApiJsClient.IssueContentsApi* | [**inappropriateContentsPost**](docs/IssueContentsApi.md#inappropriateContentsPost) | **POST** /inappropriate_contents | Issue inappropriate content
*QoodishApiJsClient.LikesApi* | [**mapsMapIdLikeDelete**](docs/LikesApi.md#mapsMapIdLikeDelete) | **DELETE** /maps/{map_id}/like | Unlike map
*QoodishApiJsClient.LikesApi* | [**mapsMapIdLikePost**](docs/LikesApi.md#mapsMapIdLikePost) | **POST** /maps/{map_id}/like | Like map
*QoodishApiJsClient.LikesApi* | [**mapsMapIdLikesGet**](docs/LikesApi.md#mapsMapIdLikesGet) | **GET** /maps/{map_id}/likes | Fetch map likes
*QoodishApiJsClient.LikesApi* | [**reviewsReviewIdCommentsCommentIdLikeDelete**](docs/LikesApi.md#reviewsReviewIdCommentsCommentIdLikeDelete) | **DELETE** /reviews/{review_id}/comments/{comment_id}/like | Unlike review comment
*QoodishApiJsClient.LikesApi* | [**reviewsReviewIdCommentsCommentIdLikePost**](docs/LikesApi.md#reviewsReviewIdCommentsCommentIdLikePost) | **POST** /reviews/{review_id}/comments/{comment_id}/like | Like review comment
*QoodishApiJsClient.LikesApi* | [**reviewsReviewIdCommentsCommentIdLikesGet**](docs/LikesApi.md#reviewsReviewIdCommentsCommentIdLikesGet) | **GET** /reviews/{review_id}/comments/{comment_id}/likes | Fetch comment likes
*QoodishApiJsClient.LikesApi* | [**reviewsReviewIdLikeDelete**](docs/LikesApi.md#reviewsReviewIdLikeDelete) | **DELETE** /reviews/{review_id}/like | Unlike review
*QoodishApiJsClient.LikesApi* | [**reviewsReviewIdLikePost**](docs/LikesApi.md#reviewsReviewIdLikePost) | **POST** /reviews/{review_id}/like | Like review
*QoodishApiJsClient.LikesApi* | [**reviewsReviewIdLikesGet**](docs/LikesApi.md#reviewsReviewIdLikesGet) | **GET** /reviews/{review_id}/likes | Fetch review likes
*QoodishApiJsClient.LikesApi* | [**usersUserIdLikesGet**](docs/LikesApi.md#usersUserIdLikesGet) | **GET** /users/{user_id}/likes | Fetch user likes
*QoodishApiJsClient.MapsApi* | [**mapsGet**](docs/MapsApi.md#mapsGet) | **GET** /maps | List Maps
*QoodishApiJsClient.MapsApi* | [**mapsMapIdDelete**](docs/MapsApi.md#mapsMapIdDelete) | **DELETE** /maps/{map_id} | Delete a Map
*QoodishApiJsClient.MapsApi* | [**mapsMapIdGet**](docs/MapsApi.md#mapsMapIdGet) | **GET** /maps/{map_id} | Get Map detail
*QoodishApiJsClient.MapsApi* | [**mapsMapIdPut**](docs/MapsApi.md#mapsMapIdPut) | **PUT** /maps/{map_id} | Update a Map
*QoodishApiJsClient.MapsApi* | [**mapsPost**](docs/MapsApi.md#mapsPost) | **POST** /maps | Create a new Map
*QoodishApiJsClient.MetadataApi* | [**mapsMapIdMetadataGet**](docs/MetadataApi.md#mapsMapIdMetadataGet) | **GET** /maps/{map_id}/metadata | Get Map metadata
*QoodishApiJsClient.MetadataApi* | [**reviewsReviewIdMetadataGet**](docs/MetadataApi.md#reviewsReviewIdMetadataGet) | **GET** /reviews/{review_id}/metadata | Get Review metadata
*QoodishApiJsClient.MetadataApi* | [**spotsPlaceIdMetadataGet**](docs/MetadataApi.md#spotsPlaceIdMetadataGet) | **GET** /spots/{place_id}/metadata | Get Spot metadata
*QoodishApiJsClient.NotificationsApi* | [**notificationsGet**](docs/NotificationsApi.md#notificationsGet) | **GET** /notifications | Fetch notifications
*QoodishApiJsClient.NotificationsApi* | [**notificationsNotificationIdPut**](docs/NotificationsApi.md#notificationsNotificationIdPut) | **PUT** /notifications/{notification_id} | Update notification
*QoodishApiJsClient.PlacesApi* | [**placesGet**](docs/PlacesApi.md#placesGet) | **GET** /places | Fetch places
*QoodishApiJsClient.PushNotificationApi* | [**usersUserIdPushNotificationPut**](docs/PushNotificationApi.md#usersUserIdPushNotificationPut) | **PUT** /users/{user_id}/push_notification | Update push notification
*QoodishApiJsClient.ReviewsApi* | [**mapsMapIdReviewsGet**](docs/ReviewsApi.md#mapsMapIdReviewsGet) | **GET** /maps/{map_id}/reviews | Fetch map reviews
*QoodishApiJsClient.ReviewsApi* | [**mapsMapIdReviewsPost**](docs/ReviewsApi.md#mapsMapIdReviewsPost) | **POST** /maps/{map_id}/reviews | Create review
*QoodishApiJsClient.ReviewsApi* | [**mapsMapIdReviewsReviewIdGet**](docs/ReviewsApi.md#mapsMapIdReviewsReviewIdGet) | **GET** /maps/{map_id}/reviews/{review_id} | Fetch review
*QoodishApiJsClient.ReviewsApi* | [**reviewsGet**](docs/ReviewsApi.md#reviewsGet) | **GET** /reviews | Fetch reviews
*QoodishApiJsClient.ReviewsApi* | [**reviewsReviewIdDelete**](docs/ReviewsApi.md#reviewsReviewIdDelete) | **DELETE** /reviews/{review_id} | Delete review
*QoodishApiJsClient.ReviewsApi* | [**reviewsReviewIdPut**](docs/ReviewsApi.md#reviewsReviewIdPut) | **PUT** /reviews/{review_id} | Update review
*QoodishApiJsClient.ReviewsApi* | [**spotsPlaceIdReviewsGet**](docs/ReviewsApi.md#spotsPlaceIdReviewsGet) | **GET** /spots/{place_id}/reviews | Fetch spot reviews
*QoodishApiJsClient.ReviewsApi* | [**usersUserIdReviewsGet**](docs/ReviewsApi.md#usersUserIdReviewsGet) | **GET** /users/{user_id}/reviews | Fetch user reviews
*QoodishApiJsClient.SpotsApi* | [**mapsMapIdSpotsGet**](docs/SpotsApi.md#mapsMapIdSpotsGet) | **GET** /maps/{map_id}/spots | Fetch spots on map
*QoodishApiJsClient.SpotsApi* | [**spotsGet**](docs/SpotsApi.md#spotsGet) | **GET** /spots | Fetch spots
*QoodishApiJsClient.SpotsApi* | [**spotsPlaceIdGet**](docs/SpotsApi.md#spotsPlaceIdGet) | **GET** /spots/{place_id} | Fetch a spot
*QoodishApiJsClient.UserMapsApi* | [**usersUserIdMapsGet**](docs/UserMapsApi.md#usersUserIdMapsGet) | **GET** /users/{user_id}/maps | Fetch user Maps
*QoodishApiJsClient.UsersApi* | [**usersGet**](docs/UsersApi.md#usersGet) | **GET** /users | Search users
*QoodishApiJsClient.UsersApi* | [**usersPost**](docs/UsersApi.md#usersPost) | **POST** /users | Sign in
*QoodishApiJsClient.UsersApi* | [**usersUserIdDelete**](docs/UsersApi.md#usersUserIdDelete) | **DELETE** /users/{user_id} | Delete user account
*QoodishApiJsClient.UsersApi* | [**usersUserIdGet**](docs/UsersApi.md#usersUserIdGet) | **GET** /users/{user_id} | Get user profile
*QoodishApiJsClient.UsersApi* | [**usersUserIdPut**](docs/UsersApi.md#usersUserIdPut) | **PUT** /users/{user_id} | Update user profile


## Documentation for Models

 - [QoodishApiJsClient.Author](docs/Author.md)
 - [QoodishApiJsClient.Collaborator](docs/Collaborator.md)
 - [QoodishApiJsClient.Comment](docs/Comment.md)
 - [QoodishApiJsClient.CurrentUser](docs/CurrentUser.md)
 - [QoodishApiJsClient.InappropreateContent](docs/InappropreateContent.md)
 - [QoodishApiJsClient.InlineObject](docs/InlineObject.md)
 - [QoodishApiJsClient.InlineObject1](docs/InlineObject1.md)
 - [QoodishApiJsClient.Invite](docs/Invite.md)
 - [QoodishApiJsClient.InviteInvitable](docs/InviteInvitable.md)
 - [QoodishApiJsClient.Like](docs/Like.md)
 - [QoodishApiJsClient.MapDetail](docs/MapDetail.md)
 - [QoodishApiJsClient.MapDetailBase](docs/MapDetailBase.md)
 - [QoodishApiJsClient.Metadata](docs/Metadata.md)
 - [QoodishApiJsClient.NewInvite](docs/NewInvite.md)
 - [QoodishApiJsClient.NewMap](docs/NewMap.md)
 - [QoodishApiJsClient.NewReview](docs/NewReview.md)
 - [QoodishApiJsClient.NewUser](docs/NewUser.md)
 - [QoodishApiJsClient.Notification](docs/Notification.md)
 - [QoodishApiJsClient.NotificationNotifiable](docs/NotificationNotifiable.md)
 - [QoodishApiJsClient.Place](docs/Place.md)
 - [QoodishApiJsClient.PushNotification](docs/PushNotification.md)
 - [QoodishApiJsClient.Review](docs/Review.md)
 - [QoodishApiJsClient.ReviewImage](docs/ReviewImage.md)
 - [QoodishApiJsClient.ReviewMap](docs/ReviewMap.md)
 - [QoodishApiJsClient.Spot](docs/Spot.md)


## Documentation for Authorization



### firebaseAuth


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

