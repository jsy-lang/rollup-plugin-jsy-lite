# rollup-plugin-jsy-lite

Babel configuration for using JSY in rollup

## Example

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
      { file: pkg.module, format: 'es', sourcemap }],
    plugins, external },
]
```

in `package.json` :
```json
{ …
  "main": "dist/index.js",
  "module": "dist/index.mjs",
  "files": [ "dist/", "code/" ],

  "dependencies": { },

  "devDependencies": {
    "jsy-transpile": "github:shanewholloway/jsy-transpile",
    "rollup": "^0.55.3",
    "rollup-plugin-jsy-lite": "github:shanewholloway/rollup-plugin-jsy-lite"
  },

  "scripts": {
    "clean": "rm -rf ./dist/*",
    "build": "rollup --config",
    "watch": "npm -s run build -- --watch",
    "pretest": "npm -s run build",
    "test": "true"
  }
}
```

## License

[MIT](LICENSE)
