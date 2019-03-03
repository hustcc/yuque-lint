#!/usr/bin/env node

import '@babel/polyfill';
import program from 'commander';
import { createApp } from './app';

/*
 * -v --version
 * -c --config
 * -p --port
 * start
 **/
program
  .version('__VERSION__', '-v, --version')
  .usage('<yuque-lint> [options]')
  .description('Yuque.com lint server')
  .option('-p, --port [server-port]', 'yuque-lint service port, default 8527')
  .option('-c, --configure [configure-file]', 'lint-md\'s .lintmdrc configure file, default empty')
  .action(cmd => {
    // default port is 8527.
    const port = Number(cmd.port || 8527);
    // default configure is empty.
    const configure = cmd.configure || {};

    createApp(configure).listen(port, () => {
      console.log(`yuque-lint: service started on 127.0.0.1:${port}.`)
    });
  });

program.parse(process.argv);

// if (!program.args.length) {
//   program.help();
// }
