const { concurrent, series } = require('nps-utils')

const CLIENT = 'client/'
const SERVER = 'server/'

// const START_NPS = 'nps'
const START_NPM = 'npm run start'

module.exports = {
  scripts: {
    default: 'nps start',
    start: {
      default: concurrent({
        FE: {
          script: `cd ${CLIENT} && ${START_NPM}`,
          color: 'blue.bold',
        },
        BE: {
          script: `cd ${SERVER} && ${START_NPM}`,
          color: 'green.bold',
        },
      }),
      FE: {
        script: `cd ${CLIENT} && ${START_NPM}`,
        color: 'blue.bold',
      },
      BE: {
        script: `cd ${SERVER} && ${START_NPM}`,
        color: 'green.bold',
      },
    },
    setup:  {
      default: concurrent({
        FE: {
          script: 'nps setup.FE',
          color: 'blue.bold',
        },
        BE: {
          script: 'nps setup.BE',
          color: 'green.bold',
        },
      }),
      FE: {
        // default: series.nps('setup.FE.npm', 'setup.FE.env'),
        default: series.nps('setup.FE.npm'),
        npm:`cd ${CLIENT} && npm i -D`,
        // env: `cd ${CLIENT} && cp .env.example .env.development`,
      },
      BE: {
        // default: series.nps('setup.BE.npm', 'setup.BE.env'),
        default: series.nps('setup.BE.npm'),
        npm:`cd ${SERVER} && npm i -D`,
        // env: `cd ${SERVER} && cp .env.example .env.development`,
      },
    },
    test: 'echo "Error: no test specified" && exit 1',
  }
};
