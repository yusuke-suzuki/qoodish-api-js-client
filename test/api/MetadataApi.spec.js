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
    instance = new QoodishApi.MetadataApi();
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

  describe('MetadataApi', function() {
    describe('mapsMapIdMetadataGet', function() {
      it('should call mapsMapIdMetadataGet successfully', function(done) {
        //uncomment below and update the code to test mapsMapIdMetadataGet
        //instance.mapsMapIdMetadataGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reviewsReviewIdMetadataGet', function() {
      it('should call reviewsReviewIdMetadataGet successfully', function(done) {
        //uncomment below and update the code to test reviewsReviewIdMetadataGet
        //instance.reviewsReviewIdMetadataGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('spotsPlaceIdMetadataGet', function() {
      it('should call spotsPlaceIdMetadataGet successfully', function(done) {
        //uncomment below and update the code to test spotsPlaceIdMetadataGet
        //instance.spotsPlaceIdMetadataGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
