import { testOnAndroid, testOnIOS, testOnWeb, testRedux } from './projects';
import { Config } from './types';

const config: Config = {
    projects: [
        testOnAndroid,
        // testOnIOS,
        // testOnWeb,
        testRedux,
    ],
    rootDir: '../',
    verbose: true,
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
        '!<rootDir>/src/**/*test.{ts,tsx,js,jsx}',
        '!<rootDir>/src/entities.ts',
    ],
    coverageDirectory: 'coverage',
    coverageThreshold: {
        global: {
            statements: 70,
        },
    },
};

export default config;