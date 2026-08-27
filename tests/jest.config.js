module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/*.test.ts'],
  moduleNameMapper: {
    '^@realmforge/shared$': '<rootDir>/../shared/src',
    '^@realmforge/server/(.*)$': '<rootDir>/../server/src/$1',
    '^@realmforge/server$': '<rootDir>/../server/src',
  },
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
      },
    ],
  },
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    '<rootDir>/../shared/src/**/*.ts',
    '<rootDir>/../server/src/**/*.ts',
    '!<rootDir>/../**/node_modules/**',
    '!<rootDir>/../**/dist/**',
  ],
};
