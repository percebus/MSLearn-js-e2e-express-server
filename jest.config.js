module.exports = {
  reporters: ['default', 'jest-junit'],
  collectCoverage: true,
  coverageReporters: ['cobertura'],
  collectCoverageFrom: ['./src/**'],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
