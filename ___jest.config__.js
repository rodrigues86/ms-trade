module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  testTimeout: 5000, // Optional: Increase the timeout if needed
  maxWorkers: 4 // Optional: Configure the number of parallel workers
}
