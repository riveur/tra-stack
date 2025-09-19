# TRA Stack

This is a monorepo thats use theses technologies:

- [Tanstack Router](https://tanstack.com/router/latest/docs/framework/react/overview) as frontend
- [TailwindCSS](https://tailwindcss.com/) as styling
- [shadcn/ui](https://ui.shadcn.com/) as UI components
- [AdonisJS](https://adonisjs.com/) as backend
- [PostgreSQL](https://www.postgresql.org/) as database
- [ESLint](https://eslint.org/) as linter
- [Prettier](https://prettier.io/) as code formatter
- [Tuyau](https://tuyau.julr.dev/docs/introduction) as E2E typesafe client for AdonisJS
- [PNPM](https://pnpm.io/) as package manager
- [Turborepo](https://turbo.build/repo) as monorepo manager

## Getting started

### Install dependencies

```bash
pnpm install
```

### Backend configuration

```bash
cd apps/server

cp .env.example .env # Fill the missing informations

node ace generate:key
```

### Frontend configuration

```bash
cd apps/web

cp .env.example .env.local # Fill the missing informations
```

### Start the application

```bash
pnpm dev
```

## More information

### Use tuyau

To use tuyau, you finish to create your controllers in AdonisJS, you have to generate some code to get the typesafiety in the frontend.

```bash
cd apps/server

node ace tuyau:generate
```

It's will generate files in `apps/server/.adonisjs`