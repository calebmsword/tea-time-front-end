import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Props from './MetaDataView.types'

const MetaDataView : React.FC<Props> = ( {metadataKey, metadataValue, setMetaDataValue} ) => {    
    return (
        <View>
            <Text>{metadataKey}</Text>
            <TextInput value={metadataValue} onChangeText={setMetaDataValue} />
        </View>
    );
}

export default MetaDataView;