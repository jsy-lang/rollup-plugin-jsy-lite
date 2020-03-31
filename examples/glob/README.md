# Glob pattern use of rollup-plugin-jsy-lite

Configuration for using [JSY](https://github.com/jsy-lang/jsy-lang-docs#readme) in [RollupJS](https://rollupjs.org) *without Babel*.

##### NPM Install

```bash
# optional; could also use `npm init .`
$ echo '{"private": true}' > package.json

# install devDependencies for JSY and RollupJS
$ npm install -D \
    rollup rollup-plugin-jsy-lite \
    glob
```

##### Add `rollup.config.js` with:

```javascript
import {parse as path_parse} from 'path'
import rpi_jsy from 'rollup-plugin-jsy-lite'

const configs = []
export default configs

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []


import {sync as glob_sync} from 'glob'
glob_sync('code/*.jsy')
  .forEach(add_jsy)


function add_jsy(src_filename) {
  const {name} = path_parse(src_filename)
  configs.push({
    input: src_filename,
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
