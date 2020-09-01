*Don't ever import this file.*

This package is to test scripts and publishing to npmjs and github


generate password https://hostingcanada.org/htpasswd-generator/


add conventional commits

- [ ] add initial commit
  ```
  npx lerna exec --concurrency 1 --stream -- 'conventional-changelog --preset angular --release-count 0 --commit-path $PWD --pkg $PWD/package.json --outfile $PWD/CHANGELOG.md --verbose --lerna-package $LERNA_PACKAGE_NAME'
  ```
- [ ] fist publish
  ```
  GH_TOKEN=bbxxxx \
  HUSKY_BYPASS=true \
  lerna publish from-package \
    --conventional-commits -m 'chore(release): publish' \
    --registry http://localhost:4873
  ```

- [ ] second publish
  ```
  GH_TOKEN=bbxxxx \
  HUSKY_BYPASS=true \
  lerna publish \
    --conventional-commits -m 'chore(release): publish' \
    --registry http://localhost:4873
  ```
