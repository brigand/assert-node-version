# assert-node-version

A module to assert the current node version against the one
in the package.json or .nvmrc file.

## API
```javascript
// directory can be a directory which is used to lookup the node version
// `process.cwd()` is used as default directory
// The method throws an error if the version isn't satisfied
require('@brigand/assert-node-version')([directory])
```

When using `import` statements, you may prefer to import the 'auto' module which does the assertion
without requiring a function call.

```javascript
import '@brigand/assert-node-version/auto';

// or
require('@brigand/assert-node-version/auto');
```

## Version 2.x

In version 2, if the version is only digits and periods, it will be interpreted as if it began
with a caret (i.e. semver compatible). Prefix the version with an `=` to get the 1.x behavior.
