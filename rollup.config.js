import pkg from './package.json'
import rpi_resolve from '@rollup/plugin-node-resolve'

export default {
	input: 'code/index.js',
	output: [
		{file: pkg.module, format: 'es'},
		{file: pkg.main, format: 'cjs'}],
  plugins: [ rpi_resolve() ],
  external: ['path', 'util'],
}

