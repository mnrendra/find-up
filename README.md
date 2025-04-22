# @mnrendra/find-up

![version](https://img.shields.io/npm/v/@mnrendra/find-up)
![types](https://img.shields.io/npm/types/@mnrendra/find-up)
![license](https://img.shields.io/npm/l/@mnrendra/find-up)
![size](https://img.shields.io/npm/unpacked-size/@mnrendra/find-up)
![downloads](https://img.shields.io/npm/dm/@mnrendra/find-up)

A utility to find a file or directory by searching upward from a specific directory.

## Install
```bash
npm i @mnrendra/find-up
```

## API

### **`findUp`**
Finds a file or directory by searching upward from a specific directory.<br/>
*If no initial directory is provided, the search will start from the current working directory.*

#### **Type**:
```typescript
(target: string, initDir?: string) => string | null
```

#### Parameters

| Name      | Type     | Description                                                               |
|-----------|----------|---------------------------------------------------------------------------|
| `target`  | `string` | The name of the file or directory to find.                                |
| `initDir` | `string` | Optional directory to start searching from (defaults to `process.cwd()`). |

#### **Return Type**:
```typescript
string | null
```
The absolute path of the file or directory if found, or `null` if not found.

## Usage

### **CommonJS**

Let's say your package directory is `/foo/package-directory`, where the `package.json` file is located.<br/>
Then, you want to find the `package.json` from `/foo/package-directory/src/index.cjs`:
```javascript
const { findUp } = require('@mnrendra/find-up')

const pkgPath1 = findUp('package.json') // Searches from '/foo/package-directory' (the value of `process.cwd()`).
const pkgPath2 = findUp('package.json', __dirname) // Searches from '/foo/package-directory/src' (the value of `__dirname`).

console.log(pkgPath1 === pkgPath2) // output: true
```

### **ES Modules**

Let's say your package directory is `/foo/package-directory`, where the `package.json` file is located.<br/>
Then, you want to find the `package.json` from `/foo/package-directory/src/index.mjs`:
```javascript
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import { findUp } from '@mnrendra/find-up'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const pkgPath1 = findUp('package.json') // Searches from '/foo/package-directory' (the value of `process.cwd()`).
const pkgPath2 = findUp('package.json', __dirname) // Searches from '/foo/package-directory/src' (the value of `__dirname`).

console.log(pkgPath1 === pkgPath2) // output: true
```

## License
[MIT](https://github.com/mnrendra/find-up/blob/HEAD/LICENSE)

## Author
[@mnrendra](https://github.com/mnrendra)
