import { existsSync } from 'node:fs'
import { dirname, parse } from 'node:path'

import movePath from './movePath'

const findUp = (
  path: string,
  target: string
): string | null => {
  while (!existsSync(path)) {
    if (dirname(path) === parse(path).root) {
      return null
    }

    path = movePath(path, '..')
  }

  return path
}

export default findUp
