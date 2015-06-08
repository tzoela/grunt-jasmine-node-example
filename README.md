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
