<div align="center">

  
  <h1 align="center"><strong>Criando uma Minimal API da Fórmula 1 com Node.js e Fastify</strong></h1>
  <p align="center">
	  Don't start a new Node project from zero!<br> Use this simple <b>Nodejs</b> boilerplate with pre-configured <b>Typescript</b> in a modern way.
  </p>

</div>

<br />

  <!-- Badges -->
<div align="center">
  
  [![TypeScript version][ts-badge]][typescript-5-4]
  [![Node.js version][nodejs-badge]][nodejs]

</div>

# 🚀 Technologies

This code source was developed with the following items:


### 📦 Dependencies

### Produção
- [fastify][fastify-npm] - Fast and efficient web framework for Node.js.

- [@fastify/cors][@fastify/cors-npm] - Plugin to enable CORS (Cross-Origin Resource Sharing) on ​​the Fastify server. 

### Desenvolvimento
- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [@types/node][@types/node-npm] - type definitions for node

### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Enviroment variables
- `tsconfig.json` - Typescript configure Options

### Logging

This server uses Fastify's built-in logger, which is based on Pino. It automatically logs all requests and responses to the console. To disable or configure the logger, edit the Fastify instance in the project's main file.

### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.

# 👨‍💻 How To Use

click in **[Use this template]** OR

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/felipeAguiarCode/node-blue-boilerplate

# Go into the repository
$ cd node-blue-boilerplate

# Install dependencies
$ npm install
```

## Author

| [<br><sub>Ricardo Amor</sub>](https://github.com/DuasEstrelas1931) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](www.linkedin.com/in/ricardo-amor-divino-a562a9125)                                             |

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de recebimento (pull requests) para melhorar este projeto.

# Credits

icons by [Pino Lamanna][dribble-icon]

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
