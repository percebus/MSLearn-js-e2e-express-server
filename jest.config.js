module.exports = {
  reporters: ["default", "jest-junit"],
  collectCoverage: true,
  coverageReporters: ["cobertura"],
  collectCoverageFrom: ["./src/**"],
  /* TODO
  // coverageThreshold: {
  //   global: {
  //     lines: 90,
  //   },
  // },
   */
};
