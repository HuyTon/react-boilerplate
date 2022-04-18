# React Boilerplate
A boilerplate to build web application using React, Redux and Webpack. Perform unit testing with Jest framework and Enzyme.

## Technical library
The source code is already set up with the following libraries:

- React Redux and relevant libraries
- Styled Components
- Axios
- MomentJs
- Authentication with Auth0
- React Testing Library with Jest frameworkd and Enzyme

## Components
1. [Project Structure](./docs/project-structure)
2. [Authentication](./docs/auth)
3. [Caching](/docs/cache)
4. [Cookie](/docs/cookie)
5. [Logs](/docs/logs)
6. [Context](/docs/context)

## How to use this boilerplate?

### Create files .env
- **.env**: env file or dotenv file is a simple text configuration file for controlling your Applications environment constants. Between Local, Staging and Production environments, the majority of your Application will not change.
- **.env.development**: this env file specified using on development environment.
- **.env.production**: this env file specified using on production environment.

### Configure Webpack
- **webpack**: Webpack is first and foremost a bundler. Webpack's base functionality is to take a JavaScript file, resolve any dependencies ( require() , import , etc.), and output a bundled JavaScript file that contains all those dependencies.
- **webpack.common.js**: this file contains the common webpack configurations for all environments and should not do modify on it if not neccessary.
- **webpack.dev.js**: this file contains the webpack configurations for development environment included the devServer's configurations too.
- **webpack.prod.js**: this file contains the webpack configurations for production environment.

## Install packages and run boilerplate

```
npm install
npm start
```

## Execute unit testing

```
npm test
```

