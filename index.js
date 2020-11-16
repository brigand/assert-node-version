module.exports = function assertNodeVersion (dir) {
  var version = require('expected-node-version')(dir)

  if (version) {
    // Allow naked versions to be matched with a 'compatibility' lens. To prevent this,
    // prefix the version with an `=`. For example `1.2` is interpreted as `^1.2.0`,
    // but `=1.2` as `>=1.2.0 <1.3.0`. Specifying all three parts with the `=` prefix, e.g. `=1.2.3`,
    // will require an exact version match.
    if (/^[0-9.\s]$/.test(version)) {
      version = '^' + version
    }

    var satisfied = require('semver').satisfies(process.version, version)
    if (!satisfied) {
      throw new Error("Failed to satisfy expected node version. Expected: '" + version + "', Current '" + process.version + "'")
    }
  }
}
