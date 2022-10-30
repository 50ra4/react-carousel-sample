import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  roots: ['src'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/src/presentation/components/$1',
    '^src/(.*)$': '<rootDir>/src/$1',
  },
};

export default config;
