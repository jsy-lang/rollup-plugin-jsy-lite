# Package reference use of rollup-plugin-jsy-lite

Configuration for using [JSY](https://github.com/jsy-lang/jsy-lang-docs#readme) in [RollupJS](https://rollupjs.org) *without Babel*.

##### NPM Install

```bash
# optional; could also use `npm init .`
$ echo '{"private": true}' > package.json

# install devDependencies for JSY and RollupJS
$ npm install -D \
    rollup rollup-plugin-jsy-lite
```

##### Add `rollup.config.js` with:

```javascript
import rpi_jsy from 'rollup-plugin-jsy-lite'

const configs = []
export default configs


const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []


import pkg from './package.json'
configs.push({
  input: 'code/index.jsy',
  output: [ 
      pkg.main && { file: pkg.main, format: 'cjs', exports:'named', sourcemap },
      pkg.browser && { file: pkg.browser, format: 'umd', name: pkg.name, exports:'named', sourcemap },
      pkg.module && { file: pkg.module, format: 'es', sourcemap },
    ].filter(Boolean),
  plugins, external })
```

##### Add library exports to `package.json` :

```json
{
  "main": "cjs/index.js",
  "module": "esm/index.mjs",
  "browser": "umd/index.js",
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
