//import rpi_jsy from 'rollup-plugin-jsy-lite'
import rpi_jsy from './esm/index.js'

export default {
	input: 'node_modules/jsy-transpile/code/scanner/inject_dedent.jsy',
	output: {format: 'es', sourcemap: 'inline'},
  plugins: [ rpi_jsy({exclude: []}) ]}

