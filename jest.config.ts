import type { Config } from '@jest/types'

// Sync object
const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  modulePathIgnorePatterns: ['<rootDir>/.history/', '<rootDir>/tests/tests-utils/'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: ['**/src/**/*.{ts,vue}'],
  coverageReporters: ['json', 'lcov', 'text-summary', 'clover'],
  verbose: true,
  forceExit: !!process.env.CI,

}
export default config
