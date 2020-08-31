*Don't ever import this file.*

This package is to test scripts and publishing to npmjs and github


generate password https://hostingcanada.org/htpasswd-generator/


add conventional commits

- [ ] add initial commit
   ```
   npx lerna exec --concurrency 1 --stream -- 'conventional-changelog --preset angular --release-count 0 --commit-path $PWD --pkg $PWD/package.json --outfile $PWD/CHANGELOG.md --verbose --lerna-package $LERNA_PACKAGE_NAME'
   ```
