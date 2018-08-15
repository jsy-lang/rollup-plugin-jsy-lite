import pkg from './package.json'
import rpi_resolve from 'rollup-plugin-node-resolve'
import rpi_commonjs from 'rollup-plugin-commonjs'

const plugins = [
  rpi_resolve(),
  rpi_commonjs({ include: 'node_modules/**', sourceMap: false }),
]
const external = ['path']

export default {
	input: 'code/index.js',
	output: [
		{file: pkg.module, format: 'es'},
		{file: pkg.main, format: 'cjs'}],
  plugins, external}

