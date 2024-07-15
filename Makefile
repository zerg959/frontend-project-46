gendiff:
		node bin/gendiff.js

publish:
		npm publish --dry-run

install:
		npm ci

run:
		node bin/gendiff __fixtures__/file1.json __fixtures__/file2.json

test:
		gendiff __fixtures__/file1.json __fixtures__/file2.json

lint:
		npx eslint .

lint-fix:
		npx eslint . --fix