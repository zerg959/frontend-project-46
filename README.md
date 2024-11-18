### Hexlet tests and linter status:
[![Actions Status](https://github.com/zerg959/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zerg959/frontend-project-46/actions)
[![Actions Status](https://github.com/zerg959/frontend-project-46/actions/workflows/differences-check.yml/badge.svg)](https://github.com/zerg959/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/9cda0151e6851e5397ec/maintainability)](https://codeclimate.com/github/zerg959/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/9cda0151e6851e5397ec/test_coverage)](https://codeclimate.com/github/zerg959/frontend-project-46/test_coverage)

### Getting started
#### Options
- Use gendiff -h - to see help menu.
- Use syntax like: gendiff [options] <filepath1> <filepath2> - to compare two files and shows differences.
- Compared files are in default __fixtures__ directory.
- gendiff allows compare files in .json, .yml and .yaml formats.
- [options] : to use options use syntax like: <b>gendiff --format plain filepath1.json filepath2.json<b>;<br>options changes format of output data. JSON (--format json), string (--format palin) or default tree-structure.
- [options] - realized options: "plain", "json",
<ul>
    <li>Install node.js</li>
    <li>Install Node Packet Manager (npm)</li>
    <li>Clone repository (git clone git@github.com:zerg959/frontend-project-46.git)</li>
    <li>Install dependencies (npm install)</li>
</ul>

### Examples
<ul>
    <li><b>make run</b> - Example of using package.<br> https://asciinema.org/a/AOp8T1lJZD30f99ZdgoMPq7IA</li>
    <li><b>make test</b> - Run tests.<br> https://asciinema.org/a/2VhnWPN84klI2QNF8XxgTQRN8</li>
    <li>Add compared files into __fixtures__ directory (yaml, yml or json formats)</li>
    <li>In root directory in terminal use command: "node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json". This will return the answer in default format: tree with status marks in data</li>
</ul>

### Options
<ul>
    <li><b>--format json:</b> https://asciinema.org/a/XQrzLbzfvpwHVtTGd8QdkSw7X</li>
    <li><b>--format plain:</b>  https://asciinema.org/a/OioZplb3szAI2KKygMqpWcJmc</li>
    <li><b>no options, json-tree (default):</b> https://asciinema.org/a/Whpmqt94nbVpc9wcl9HtXxwmr</li>
</ul>
<a href="https://github.com/zerg959/frontend-project-46">Link to repository</a>
