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
    instance = new QoodishApi.PushNotification();
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

  describe('PushNotification', function() {
    it('should create an instance of PushNotification', function() {
      // uncomment below and update the code to test PushNotification
      //var instane = new QoodishApi.PushNotification();
      //expect(instance).to.be.a(QoodishApi.PushNotification);
    });

    it('should have the property followed (base name: "followed")', function() {
      // uncomment below and update the code to test the property followed
      //var instane = new QoodishApi.PushNotification();
      //expect(instance).to.be();
    });

    it('should have the property liked (base name: "liked")', function() {
      // uncomment below and update the code to test the property liked
      //var instane = new QoodishApi.PushNotification();
      //expect(instance).to.be();
    });

    it('should have the property invited (base name: "invited")', function() {
      // uncomment below and update the code to test the property invited
      //var instane = new QoodishApi.PushNotification();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new QoodishApi.PushNotification();
      //expect(instance).to.be();
    });

  });

}));
