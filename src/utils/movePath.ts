import { basename, dirname, resolve } from 'node:path'

const movePath = (
  path: string,
  aim: string
): string => {
  const base = basename(path)

  const dir = dirname(path)

  return resolve(dir, aim, base)
}

export default movePath
