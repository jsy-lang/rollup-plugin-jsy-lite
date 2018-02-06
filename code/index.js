import {parse as path_parse} from 'path'
import {createFilter} from 'rollup-pluginutils'
import {jsy_scanner} from 'jsy-transpile'

const default_config = { exclude: 'node_modules/**' }

export default jsy_lite
function jsy_lite(config=default_config) {
  const filter = createFilter(config.include, config.exclude)
  const sourceMap = false !== config.sourceMap

  return {
    name: 'jsy-lite',
    transform(code, id) {
      if (! filter(id)) return

      const res = jsy_scanner(code, {source: id})
      return { code: res.src_code(), map: res.src_map.toJSON() } } } }

