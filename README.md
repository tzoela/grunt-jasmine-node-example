Testing Node modules using grunt-jasmine-node
=============================================

To install, run:
```
git clone git@github.com:johnbeech/grunt-jasmine-node-example.git
cd grunt-jasmine-node-example
npm install
npm install grunt -g
```

To run Jasmine tests and JS Hint, run:
```
grunt
```

The project should run a couple of Jasmine unit specs against myModule.js, and then run JS Hint successfully.

```
Running "jasmine_node:all" (jasmine_node) task
Running /Users/beechj01/workspace/talon-tester/spec/myModuleSpec.js
..

Finished in 0.003 seconds
2 tests, 2 assertions, 0 failures, 0 skipped

Running "jshint:gruntfile" (jshint) task
>> 1 file lint free.

Running "jshint:lib_test" (jshint) task
>> 1 file lint free.

Done, without errors.
```

Creating new modules
====================

Create new modules under the lib folder, and use sub folders as appropriate, e.g. `lib/api/statusCode.js`
```js
var instance = function() {}

instance.identify = function(statusCode) {
  var statusCode = req.query.statusCode || 0;
  var statusMessage = knownStatusCodes[statusCode] || "Unrecognised status code";

  var response = {
    statusCode: statusCode,
    message: statusMessage
  };

  return response;
}

var knownStatusCodes = {
  "100": "Continue",
  "200": "OK",
  "400": "Bad Request",
  "500": "Internal Server Error"
};

module.exports = instance;
```

And then create a matching Spec file under `spec/api/statusCodeSpec.js`
```js
var statusCodeApi = require('../../lib/statusCode');

describe("Status Code API", function() {
  it("should produce a default response", function() {
    var response = statusCodeApi.identify();
    expect(response.statusCode).toBe(0);
    expect(response.message).toBe("Unrecognised status code");
  });

  it("should identify the status code 100 as Continue", function() {
    var response = statusCodeApi.identify(100);
    expect(response.statusCode).toBe(100);
    expect(response.message).toBe("Continue");
  });

  it("should identify the status code 200 as OK", function() {
    var response = statusCodeApi.identify(200);
    expect(response.statusCode).toBe(200);
    expect(response.message).toBe("OK");
  });

  it("should identify the status code 400 as Bad Request", function() {
    var response = statusCodeApi.identify(400);
    expect(response.statusCode).toBe(400);
    expect(response.message).toBe("Bad Request");
  });

  it("should identify the status code 500 as Internal Server Error", function() {
    var response = statusCodeApi.identify(500);
    expect(response.statusCode).toBe(500);
    expect(response.message).toBe("Internal Server Error");
  });

});
```
