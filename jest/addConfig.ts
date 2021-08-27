import returnTransformIgnorePatterns from './returnTransformIgnorePatterns';
import { WithEnzymeReturn, Config } from './types';

/**
 * `withEnzyme` comes with a lot of useful configuration to save you time,
 * but sometimes you need a little more. This function will modify the object
 * returned by `withEnzyme` to suit the needs of our project.
 *
 * @param {*} config the object returned by `withEnzyme`
 * @returns the same object but with modified properties
 */
function addConfig(config: WithEnzymeReturn) : Config {
    
    // see https://github.com/facebook/jest/issues/3613#issuecomment-304894712
    config.rootDir = '../tea-time-fe/';

    // add extra setup file
    let x = config.setupFilesAfterEnv;
    config.setupFilesAfterEnv = x && [...x, '<rootDir>/jest/setup.ts']; // x can be undefined, TypeScript gets mad if we don't account for that
    
    config.testMatch = [
        `<rootDir>/src/redux/sagas/getTeaShopsSagas/getTeaShopsSagas.test.ts`,
    ];

    config.testPathIgnorePatterns = [
    ];

    config.transformIgnorePatterns = returnTransformIgnorePatterns([
        'react-native-vector-icons',
    ]);

    config.displayName = {
        name: 'components',
        color: 'blue',
    };

    return config;
}

export default addConfig;