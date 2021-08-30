import React from 'react';
import Props from './ErrorSearchShops.types';
import { Text } from 'react-native';

const ErrorSearchedShops : React.FC<Props> = ( { error }) => {
    return (
        <Text>
            Hm, something went wrong. Our diagnostics say: {error.message}
        </Text>
    );
}

export default ErrorSearchedShops;