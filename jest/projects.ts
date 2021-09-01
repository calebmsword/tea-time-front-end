import { withEnzyme } from 'jest-expo-enzyme';
import addConfig from './addConfig';
import { WithEnzymeReturn } from './types';

export const testOnAndroid = addConfig(withEnzyme(require('jest-expo/android/jest-preset')) as WithEnzymeReturn);
export const testOnIOS = addConfig(withEnzyme(require('jest-expo/ios/jest-preset'))  as WithEnzymeReturn);
export const testOnWeb = addConfig(withEnzyme(require('jest-expo/web/jest-preset'))  as WithEnzymeReturn); // cursed, do not use
export const testRedux = {
    rootDir: '../tea-time-fe/',
    displayName: { 
        name: 'redux', 
        color: 'yellow',
    },
    testMatch: [
        '**/redux/**/*test.[jt]s?(x)',
        // '**/redux/sagas/addTeaShopSagas/*test.[jt]s?(x)',
    ],
};
