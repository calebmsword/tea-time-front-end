/**
 * Returns an array with a single string that tells Babel to ignore uncompiled
 * third-party React Native libraries.
 *
 * @param {*} ignoreThese array of strings representing third-party libraries in node_modules
 * @returns array with a single string element
 */
function returnTransformIgnorePatterns(ignoreThese: string[]) {
    const defaultIgnore = [
        'react-native',
        '@react-native-community',
        'expo(nent)?',
        '@expo(nent)?/.*',
        'react-navigation',
        '@react-navigation/.*',
        '@unimodules/.*',
        'unimodules',
        'sentry-expo',
        'native-base',
        'react-native-svg',
    ];
    const allLibraries = [...defaultIgnore, ...ignoreThese];
    const start = 'node_modules/(?!(jest-)?';
    const end = ')';
    let str = start;
    for (const i in allLibraries) {
        if (+i === 0) {
            str += `${allLibraries[i]}`;
        } else {
            str += `|${allLibraries[i]}`;
        }
    }
    str += end;
    return [str];
}

 export default returnTransformIgnorePatterns;