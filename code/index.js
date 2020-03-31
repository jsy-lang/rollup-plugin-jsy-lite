import _rpi_jsy from 'jsy-transpile/esm/rollup.mjs'

const default_jsy_config = { exclude: 'node_modules/**' }

try {
  default_jsy_config.jsy_transpile =
    require('jsy-transpile')
} catch (err) {
}

export default function rpi_jsy(config) {
  config = {... default_jsy_config, ...config}
  return _rpi_jsy(config)
}

