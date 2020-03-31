# rollup-plugin-jsy-lite
[![Build Status](https://travis-ci.org/jsy-lang/rollup-plugin-jsy-lite.svg?branch=master)](https://travis-ci.org/jsy-lang/rollup-plugin-jsy-lite)

Configuration for using [JSY](https://github.com/jsy-lang/jsy-lang-docs#readme) in [RollupJS](https://rollupjs.org) *without Babel*.

## Quick Start

```bash
# optional; could also use `npm init .`
$ echo '{"private": true}' > package.json

# install devDependencies for JSY and RollupJS
$ npm install -D rollup rollup-plugin-jsy-lite
```

##### Add `rollup.config.js` with:

```javascript
import rpi_jsy from 'rollup-plugin-jsy-lite'

const configs = []
export default configs

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []

// Allow Node module resolution -- https://github.com/rollup/rollup-plugin-node-resolve
/// import rpi_resolve from 'rollup-plugin-node-resolve'
/// plugins.push(rpi_resolve({main: true, browser: true, modules: true}))


add_jsy('my_script')


function add_jsy(name) {
  configs.push({
    input: `code/${name}.jsy`,
    output: [
      { file: `cjs/${name}.js`, format: 'cjs', exports:'named', sourcemap },
      { file: `umd/${name}.js`, format: 'umd', name, exports:'named', sourcemap },
      { file: `esm/${name}.js`, format: 'es', sourcemap },
    ],
    plugins, external })
}
```

##### Add `files` and `scripts` to `package.json` :

```json
{
  "files": [ "cjs/", "esm/", "umd/" ],
  "scripts": {
    "clean": "rm -rf ./cjs/* ./esm/* ./umd/*",
    "build": "rollup --config",
    "watch": "npm -s run build -- --watch",
    "pretest": "npm -s run build",
    "test": "true"
  }
}
```

## Other Examples

- by [Direct named files](examples/direct/README.md)
- by [Glob pattern](examples/glob/README.md)
- by [Package main/module/browser keys](examples/package/README.md)

## License

[MIT](LICENSE)
