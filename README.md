# rollup-plugin-jsy-lite

Babel configuration for using JSY in rollup

## Example

Install devDependencies :

```bash
$ npm install -D rollup rollup-plugin-jsy-lite jsy-transpile
```

in `package.json` :
```json
{ …
  "main": "cjs/index.js",
  "module": "esm/index.mjs",
  "browser": "umd/index.js",
  "files": [ "cjs/", "esm/", "umd/" ],

  "scripts": {
    "clean": "rm -rf ./cjs/* ./esm/* ./umd/*",
    "build": "rollup --config",
    "watch": "npm -s run build -- --watch",
    "pretest": "npm -s run build",
    "test": "true"
  },

  … }
```

in `rollup.config.js` :

```javascript
import pkg from './package.json'
import rpi_jsy from 'rollup-plugin-jsy-lite'

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []

export default [
  { input: 'code/index.jsy',
    output: [
      { file: pkg.main, format: 'cjs', exports:'named', sourcemap },
      { file: pkg.browser, format: 'umd', name: pkg.name, exports:'named', sourcemap },
      { file: pkg.module, format: 'es', sourcemap }],
    plugins, external },
].filter(e=>e)
```

## License

[MIT](LICENSE)
