import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { findUp } from './utils'

/**
 * Finds a file or directory by searching upward from a specific directory.
 *
 * If no initial directory is provided, it will start from the current working
 * directory (`process.cwd()`).
 *
 * @param {string} target - The name of the file or directory to
 * find.
 *
 * @param {string} [initDir] - Optional directory to start searching from.
 * Defaults to `process.cwd()`.
 *
 * @returns {string|null} The absolute path of the file or directory if found,
 * or `null` if not found.
 *
 * @see {@link https://github.com/mnrendra/find-up#findup documentation}
 */
const main = (
  target: string,
  initDir: string = cwd()
): string | null => {
  const path = resolve(initDir, target)

  return findUp(path, target)
}

export default main
