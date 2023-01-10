# List of improvements

## Tech
- Full Typescript
- Testing (Jest, Playwright)
- ESLint

## Styling
- Styling system
  - Consider https://github.com/styled-system/styled-system
- Theme
- Storybook (Maybe also Chromatic for regression)

## Improvements
- Generate API calls & type
- Lock engine, etc

## Opinion
- Maybe get rid of `export default`
- Commit convention (maybe commitlint/commitizen)
- Yarn 1 -> pnpm
- NextJS
- React-Query
- Sentry, maybe

## TODO
- Investigate more the `containers` folder

## Assignments
### Typescript migration
- CRA supports TS since `v2`, so just need to add TS configuration to start with
- Gradual migration, use TS on all new features and refactor all relevant files.
- Start the first migration batch with all independent modules (utils, atom components).