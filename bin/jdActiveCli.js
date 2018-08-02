#!/usr/bin/env node

// todo need a node version Check

const program = require('commander')
const createApp = require('../lib/createApp')
// define cli
program
  .version('beta-0.0.1')
  .command('create <appName>')
  .alias('c')
  .description('create a project by setting.json')
  .action(function(appName){
    createApp(appName)
  })

// accept clo argv
program.parse(process.argv)
