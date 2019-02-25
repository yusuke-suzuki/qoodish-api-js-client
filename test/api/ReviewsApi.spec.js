/**
 * Qoodish API
 * Qoodih API. 
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.QoodishApi);
  }
}(this, function(expect, QoodishApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new QoodishApi.ReviewsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ReviewsApi', function() {
    describe('mapsMapIdReviewsGet', function() {
      it('should call mapsMapIdReviewsGet successfully', function(done) {
        //uncomment below and update the code to test mapsMapIdReviewsGet
        //instance.mapsMapIdReviewsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mapsMapIdReviewsPost', function() {
      it('should call mapsMapIdReviewsPost successfully', function(done) {
        //uncomment below and update the code to test mapsMapIdReviewsPost
        //instance.mapsMapIdReviewsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('mapsMapIdReviewsReviewIdGet', function() {
      it('should call mapsMapIdReviewsReviewIdGet successfully', function(done) {
        //uncomment below and update the code to test mapsMapIdReviewsReviewIdGet
        //instance.mapsMapIdReviewsReviewIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reviewsGet', function() {
      it('should call reviewsGet successfully', function(done) {
        //uncomment below and update the code to test reviewsGet
        //instance.reviewsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reviewsReviewIdDelete', function() {
      it('should call reviewsReviewIdDelete successfully', function(done) {
        //uncomment below and update the code to test reviewsReviewIdDelete
        //instance.reviewsReviewIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reviewsReviewIdPut', function() {
      it('should call reviewsReviewIdPut successfully', function(done) {
        //uncomment below and update the code to test reviewsReviewIdPut
        //instance.reviewsReviewIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spotsPlaceIdReviewsGet', function() {
      it('should call spotsPlaceIdReviewsGet successfully', function(done) {
        //uncomment below and update the code to test spotsPlaceIdReviewsGet
        //instance.spotsPlaceIdReviewsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUserIdReviewsGet', function() {
      it('should call usersUserIdReviewsGet successfully', function(done) {
        //uncomment below and update the code to test usersUserIdReviewsGet
        //instance.usersUserIdReviewsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));