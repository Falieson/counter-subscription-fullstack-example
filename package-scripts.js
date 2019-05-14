const { concurrent, series } = require('nps-utils')

const CLIENT = './client/'
const SERVER = './server/'

module.exports = {
  scripts: {
    default: 'nps start',
    start:  concurrent({
      FE: {
        script: `cd ${CLIENT} && npm run start`,
        color: 'blue.bold',
      },
      BE: {
        script: `cd ${SERVER} && npm run start`,
        color: 'green.bold',
      },
    }),
    setup:  {
      default: concurrent({
        FE: {
          // script: 'nps setup.FE',
          script: 'nps setup.FE.npm',
          color: 'blue.bold',
        },
        BE: {
          // script: 'nps setup.BE',
          script: 'nps setup.BE.npm',
          color: 'green.bold',
        },
      }),
      FE: {
        // default: series.nps('setup.FE.npm', 'setup.FE.env'),
        npm:`cd ${CLIENT} && npm i -D`,
        // env: `cd ${CLIENT} && cp .env.example .env.development`,
      },
      BE: {
        // default: series.nps('setup.BE.npm', 'setup.BE.env'),
        npm:`cd ${SERVER} && npm i -D`,
        // env: `cd ${SERVER} && cp .env.example .env.development`,
      },
    },
    test: 'echo "Error: no test specified" && exit 1',
  }
};
