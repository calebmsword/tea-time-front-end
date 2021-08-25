import returnTransformIgnorePatterns from './returnTransformIgnorePatterns';

/**
 * `withEnzyme` comes with a lot of useful configuration to save you time,
 * but sometimes you need a little more. This function will modify the object
 * returned by `withEnzyme` to suit the needs of our project.
 *
 * @param {*} config the object returned by `withEnzyme`
 * @returns the same object but with modified properties
 */
function addConfig(config) {

    // add extra setup file
    config.setupFilesAfterEnv.push('<rootDir>/jest/setup.js');

    config.testPathIgnorePatterns = [
    ];

    // third-party libraries that throw errors
    // see https://jestjs.io/docs/tutorial-react-native#transformignorepatterns-customization
    const ignoreThese = [
    ];
    config.transformIgnorePatterns = returnTransformIgnorePatterns(ignoreThese);

    config.displayName = {
        name: 'components',
        color: 'blue',
    };

    return config;
}

export default addConfig;