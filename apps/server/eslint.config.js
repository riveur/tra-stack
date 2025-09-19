import { configApp } from '@repo/eslint-config'

export default configApp({
  languageOptions: {
    parserOptions: {
      tsconfigRootDir: import.meta.dirname,
    }
  }
})
