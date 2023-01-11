# List of improvements

## What to keep
- Component/container approach
- CSS-in-JS
- Use Context for simple state management
- Axios



## Refactor
- Move all `Context` hooks to `/context` folder
- Move all pages to `/pages` folder, use the folder to manage routing
- Rename `containers` to `hooks`
- Add Swagger to BE and generate API calls
- Add absolute import
- Migrate all to TS
- Editorjs -> Maybe Lexical or Tiptap
- Lock engine, etc
- Generate API calls & type
- Styling system
  - Consider https://github.com/styled-system/styled-system
- Theme
- Storybook (Maybe also Chromatic for regression)
- Inconsistency of terms : `recipe` vs `dish`, `Card` in `Dish.js` ???

### Opinion
- Maybe get rid of `export default`
- Commit convention (maybe commitlint/commitizen)
- Yarn 1 -> pnpm
- NextJS
- React-Query
- Sentry, maybe

### Added
- Typescript support
- Testing (Jest)
- ESLint
- Prettier
- Lint-staged

## Assignments
### Typescript migration
- CRA supports TS since `v2`, so just need to add TS configuration to start with
- Gradual migration, use TS on all new features and refactor all relevant files.
- Start the first migration batch with all independent modules (utils, atom components).

### Scale to production
- Separation of data and visualization
- Test
  - Add Storybook + Regression testing for all components in *components* folder
  - Add unit tests for all util functions
  - Add E2E tests for main flows
    - Add alternative
    - Save PDF
- Styling
  - Create a base theme config for styling
  - Responsive on popular screensizes
- Cross browser support (PostCSS, polyfill)
- Basic tests score with Lighthouse
- Improve Accessibility
- Release strategy
- CI-CD
- Development
  - 100% Type-script
  - Code generation
  - Branching strately
- Security
  - Authentication???
  - HTTPS
  - Content caching
  - Redirects
- Rendering strategy? Caching?
- Error handling
- Offline-support
- SEO???
- Migrate to Nextjs?
- Add Sentry for error reporting
- Deployment
- Analytics (GA, Hotjar, etc.)
- A/B testing
- Feature flag
- Secrets and env var???
- Project management?
- QA test?
- Build optimization (treeshake, codesplit)
- Serve images on CDN (Imgix, Imageboss, Cloudinary)
- i18n
- PWA?
- [12factor checklist](https://12factor.net/)

#### App
- Codepush (OTA)
- Notification
- Bug report
- Deployment pipeline (Fastlane)
- Beta test