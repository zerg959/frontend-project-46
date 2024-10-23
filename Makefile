install:
		npm install

gendiff:
		bin/gendiff.js

publish:
		npm publish --dry-run

run:
		node bin/gendiff file1.json file2.json

test:
		npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
		npx eslint .