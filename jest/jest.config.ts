import { testOnAndroid } from './projects';
import { Config } from './types';

const config: Config = {
    projects: [
        testOnAndroid,
    ],
    rootDir: '../',
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
        '<rootDir>/src/**/*test.{ts,tsx,js,jsx}',
        '!<rootDir>/src/assets/**/*',
        '!<rootDir>/src/types.ts',
        '!<rootDir>/src/entities/*',
    ],
    coverageDirectory: 'coverage',
    // coverageThreshold: {
    //     global: {
    //         statements: 70,
    //     },
    // },
};

export default config;