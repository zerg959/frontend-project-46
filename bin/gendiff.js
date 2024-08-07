#! /usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/index.js';

program
  .helpOption('-h, --help', 'output usage information')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format') //  (default: "stylish")
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    // console.log(gendiff(filepath1, filepath2));
    gendiff(filepath1, filepath2);
  });

program.parse(process.argv);
