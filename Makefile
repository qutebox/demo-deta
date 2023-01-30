install:
	yarn install
	npm install
	pnpm install --shamefully-hoist


build:
	npm run generate

upload-staging: build
	aws s3 sync .output/public s3://www-staging.detalytics.com --delete
