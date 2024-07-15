import { readFileSync } from 'node:fs';
import path from 'node:path';
import _ from 'lodash';

const getPath = (filepath) => path.resolve(process.cwd(), filepath);
const read = (filepath) => readFileSync(getPath(filepath));
// eslint-disable-next-line
const parser = (path) => JSON.parse(path);

// parse data from files
const gendiff = (filepath1, filepath2) => {
  const file1 = read(filepath1);
  const file2 = read(filepath2);
  const data1 = parser(file1);
  const data2 = parser(file2);
  // create set of keys
  const sortedKeys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  const final = ['{'];
  for (const elem of sortedKeys) {
    if (!(Object.hasOwn(data2, elem))) {
      final.push(`  - ${elem}:${data1[elem]}`);
    } else if (!(Object.hasOwn(data1, elem))) {
      final.push(`  + ${elem}:${data2[elem]}`);
    } else {
      if (data1[elem] === data2[elem]) {
        final.push(`    ${elem}:${data2[elem]}`);
      }
      if (data1[elem] !== data2[elem]) {
        final.push(`  - ${elem}:${data1[elem]}`);
        final.push(`  + ${elem}:${data2[elem]}`);
      }
    }
  }
  final.push('}');
  const newFinal = final.join('\n');
  console.log(newFinal);
};
export default gendiff;
