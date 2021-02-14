module.exports = {
  cache: false,
  collectCoverage: true,
  collectCoverageFrom: [
    'src/store/*.js',
    'src/components/*.vue',
    'src/components/**/*.vue',
    'src/util/*.vue',
    'src/views/*.vue',
    'src/views/**/*.vue'
  ],
  coverageDirectory: 'tests/coverage',
  coverageReporters: [
    'lcov',
    'text'
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'json',
    'vue'
  ],
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.jsx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testMatch: [
    '**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)'
  ],
  testURL: 'http://localhost/',
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
}
