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
    instance = new QoodishApi.InlineObject1();
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

  describe('InlineObject1', function() {
    it('should create an instance of InlineObject1', function() {
      // uncomment below and update the code to test InlineObject1
      //var instane = new QoodishApi.InlineObject1();
      //expect(instance).to.be.a(QoodishApi.InlineObject1);
    });

    it('should have the property registrationToken (base name: "registration_token")', function() {
      // uncomment below and update the code to test the property registrationToken
      //var instane = new QoodishApi.InlineObject1();
      //expect(instance).to.be();
    });

  });

}));
