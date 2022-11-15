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

## Folder structure

1. `configs` - all the configs from env variables
2. `db` - folder for database instances and migrations
3. `public` - any static files and folders
4. `services` - third party services (api, database, etc)
5. `utils` - utilities and helpers
