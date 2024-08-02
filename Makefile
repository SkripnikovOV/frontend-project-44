install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npm test

format:
	npx prettier --write .

format-check:
	npx prettier --check .

fix:
	npx eslint --fix