install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-calc:
	node bin/brain-calc.js

brain-even:
	node bin/brain-even.js

brain-gcd:
	node bin/brain-gcd.js

brain-prime:
	node bin/brain-prime.js

brain-progression:
	node bin/brain-progression.js

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