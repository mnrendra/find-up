import { resolve } from 'node:path'
import { cwd } from 'node:process'

import { findUp } from '..'

describe('Test all APIs:', () => {
  describe('Test `findUp` API:', () => {
    it('Should return the target path by searching from the current working directory when no initial directory is given!', () => {
      const received = findUp('package.json')
      const expected = resolve(cwd(), 'package.json')
      expect(received).toBe(expected)
    })

    it('Should return the target path by searching from `__dirname` when the initial directory is set to `__dirname`!', () => {
      const received = findUp('package.json', __dirname)
      const expected = resolve(cwd(), 'package.json')
      expect(received).toBe(expected)
    })

    it('Should return `null` when the target path cannot be found!', () => {
      const received = findUp('any.file')
      expect(received).toBeNull()
    })
  })
})
