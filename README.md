# svelte component

This is a project template for [Svelte](https://svelte.dev) apps. 

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit qhrtech/svelte-component-template component-name

```

## Get started

Install the dependencies...

```bash
cd component-name
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your component running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Lint and Style Checking

### [Prettier](https://prettier.io/)
> An opinionated code formatter for svelte, typescript, javascript and json. 
* Developers shgould setup to run on save in your editor. https://prettier.io/docs/en/editors.html

To check manually:
```bash
npm run prettier --silent
```

To apply fixes manually:
```bash
npm run prettier-fix
```

Svelte support is provided by prettier-plugin-svelte and config is prettier.config.js.

### [ESLint](https://eslint.org/)
> ESLint statically analyzes your code to quickly find problems.

To run:
```bash
npm run lint
```

To apply fixes:
```bash
npm run lint-fix
```

* Svelte support is provided by eslint-plugin-svelte3 and config is eslintrc.js.

### Svelte Check
* Unused CSS
* Svelte A11y hints
* JavaScript/TypeScript compiler errors

To run:
```bash
npm run check
```

## Testing
* Tests should end in `*.test.ts`

To run:
```bash
npm run test
```

To run on change:
```bash
npm run test-watch
```

To run with coverage:
```bash
npm run coverage
# results can be viewed in coverage/lcov-report/index.html
```

### [Testing Library](https://testing-library.com/)
> Simple and complete testing utilities that encourage good testing practices
* Svelte tests mostly uses the API from [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/api)
* Svelte has a few extenstions that allow access to the svelte component. [Svelte Testing Library](https://testing-library.com/docs/svelte-testing-library/api)
* The biggest difference is the need to use `await` for events.
  > fireEvent is an async method when imported from @testing-library/svelte. This is because it calls tick which tells Svelte to apply any new changes to the DOM.

### [Jest](https://jestjs.io/)
> Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
* Here is a cheatsheet [Jest cheatsheet](https://devhints.io/jest)
