import { configApp, RULES_LIST } from '@repo/eslint-config'

export default configApp({
  name: 'Custom config for Tanstack Router',
  files: ['**/*.tsx'],
  ignores: ['**/routeTree.gen.ts'],
  rules: RULES_LIST,
})
