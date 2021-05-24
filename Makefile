test:
	npm test -s
# BEGIN
coverage:
	npm test -- --coverage

install-deps:
	npm ci

test-coverage:
	npm test -- --coverage --coverageProvider=v8

.PHONY: test
# END
