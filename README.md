# Express Typescript template

Template for Express Typescript.

This is only used development (creating mock servers, etc). If need to use production, dev should maintain this repository, adding more linting and pre-commit hooks

## Requirements

1. Node v16 or higher
2. Npm v8 or higher

## Local Development

1. Install dependencies

   `npm install`
   or
   `npm ci`

2. Install husky for pre-commit hooks

   `npm run prepare`

3. Run local server. This is run typescript compiler concurrently

   `npm run dev`
