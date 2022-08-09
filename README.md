# Paraboly React Boilerplate


## Installation

1. Clone/download repo
2. If nvm is not installed , install nvm and type nvm use in command line
3. run `npm install` afterwards if it throws error try below command
4. run `npm install --save --legacy-peer-deps`command 
5. `npm start` for start development server.
---

## Commands

| Command              | Description                                                                   |
| -------------------- | ----------------------------------------------------------------------------- |
| `npm run start`      | (alias of `npm run start-dev`)                                                |
| `npm run start-dev`  | Build app continuously (HMR enabled) and serve @ `http://localhost:${env.PORT \|\| 2999}`      |
| `npm run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:${env.PORT \|\| 2999}` |
| `npm run build`      | Build app to `/dist/`                                                         |
| `npm run test`       | Run tests                                                                     |
| `npm run lint`       | Run linter                                                                    |
| `npm run lint --fix` | Run linter and fix issues                                                     |

---

## Tech Stack

#### UI Dependency
- **[React](https://facebook.github.io/react/)** (18.x)
- **[ReactRouter](https://reactrouter.com/)** (5.x)
- **[MUI](https://mui.com/)** (5.x)
- **[ReactIcons](https://react-icons.github.io/react-icons/)** (4.3.1)
- **[Axios](https://github.com/axios/axios)** (0.27.2)

#### DEV Dependency

- **[Webpack](https://webpack.js.org/)** (5.x)
- **[Typescript](https://www.typescriptlang.org/)** (4.x)
- **[Hot Module Replacement (HMR)](https://webpack.js.org/concepts/hot-module-replacement/)** ([React Fast Refresh](https://github.com/pmmmwh/react-refresh-webpack-plugin))
- [SASS](http://sass-lang.com/) support
- Code linting ([ESLint](https://github.com/eslint/eslint)) and formatting ([Prettier](https://github.com/prettier/prettier))
- Test framework ([Jest](https://facebook.github.io/jest/))

#### Logging

- **[Sentry](https://docs.sentry.io/platforms/javascript/)** (6.x)
- **[Logrocket](https://docs.logrocket.com/reference/javascript-sdk-api)** (3.x)

_Boilerplate: [React Webpack Babel Starter](https://github.com/vikpe/react-webpack-babel-starter)_
