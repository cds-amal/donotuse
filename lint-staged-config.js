module.exports = {
  '*.js': files => files
    .map(fn => `eslint --fix ${fn}`)
    .concat('git add') // recommit linted
}
