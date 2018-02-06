import pkg from './package.json'
import rpi_jsy from 'rollup-plugin-jsy-lite'

const sourcemap = 'inline'
const plugins = [rpi_jsy()]
const external = []

export default {
	input: 'code/index.jsy',
	output: [
		{file: pkg.module, sourcemap, format: 'es'},
		{file: pkg.main, sourcemap, format: 'cjs'}],
  plugins, external}

