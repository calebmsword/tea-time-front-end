  
import { withEnzyme } from 'jest-expo-enzyme';
import addConfig from './jest/addConfig'

module.exports = {
    projects: [
        addConfig(withEnzyme(require('jest-expo/android/jest-preset')))
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx,js,jsx}',
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
