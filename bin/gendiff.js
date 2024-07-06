#! /usr/bin/env node

import { program } from 'commander';
import gendiff from '../src/index.js'

// const command = (filepath1, filepath2) => {
//   console.log('Compares two configuration files and shows a difference.');
//   };
// command()

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format (default: "stylish")')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) =>{
    gendiff(filepath1, filepath2)
  })

program.parse(process.argv);
