# Direct file use of rollup-plugin-jsy-lite

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


add_jsy('my_script')


function add_jsy(src_filename) {
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
