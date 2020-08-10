# create-express-api-typescript CLI

A CLI to automatically create a Express API based in the [Express API Starter - Typescript](https://github.com/maiconfriedel/express-api-starter-typescript) repository.

## Installation

You can install the CLI globally or use it with `npx`.

```sh
# with npm
npm install -g create-express-api-typescript

# with yarn
yarn global add create-express-api-typescript
```

## Usage

```sh
# with global install
create-express-api-typescript my-awesome-api

# with npx
npx create-express-api my-awesome-api

```

This will create a directory with the given name, clone the [Express API Starter - Typescript](https://github.com/maiconfriedel/express-api-starter-typescript) repo into it, and install dependencies.

### Yarn

If you want to use Yarn instead of NPM to install de project dependencies, pass the `--yarn` option, like above:

```sh
# with global install
create-express-api-typescript my-awesome-api --yarn

# with npx
npx create-express-api my-awesome-api --yarn

```

## Credits

Credits to [w3cj](https://github.com/w3cj) for the original repository [Express API Starter](https://github.com/w3cj/create-express-api).
