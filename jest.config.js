module.exports = {
    verbose: true,
    '^.+\\.js$': 'babel-jest',
    transformIgnorePatterns: ["/node_modules/(?!vue-awesome)"],
  };