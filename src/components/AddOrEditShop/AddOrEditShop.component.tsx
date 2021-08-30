import React, { useState } from 'react';
import { View, ScrollView, TouchableHighlight, Text, Touchable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Props from './AddOrEditShop.types'
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addTeaShop, getAllTeaShops } from '../../redux/actions/teaShopActions';
import { TeaShopToAdd } from '../../entities';
import MetaDataView from '../MetaDataView/MetaDataView.component';

const AddOrEditShop : React.FC<Props> = ( {route} ) => {
    const { mode, teaShop } = route.params;
    
    AddOrEditShop.displayName = `${mode}shop`;

    const [teaShopName, setTeaShopName] = useState(teaShop ? teaShop.name : '');
    const [teaShopStreetName, setTeaShopStreetName] = useState(teaShop ? teaShop.address.streetName : '');
    const [teaShopCity, setTeaShopCity] = useState(teaShop ? teaShop.address.city : '');
    const [teaShopState, setTeaShopState] = useState(teaShop ? teaShop.address.state : '');
    const [teaShopAreaCode, setTeaShopAreaCode] = useState(teaShop ? teaShop.address.areaCode : '');
    
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const addOrUpdateBtnPressed = () => {
        if (mode === 'add') {
            const teaShopToAdd = new TeaShopToAdd(teaShopName, teaShopStreetName, teaShopCity, teaShopState, teaShopAreaCode);
            dispatch(addTeaShop(teaShopToAdd));
        } else if (mode === 'edit' ) {
            dispatch('hm...');
        }
    }

    const deleteShopBtnPressed = () => {
        dispatch('hm...');
        navigation.navigate('search');
    }

    const pressedBackButton = () => {
        navigation.navigate('search');
    }

    const arrOfMetaData = [
        <MetaDataView key={'Name'} metadataKey={'Name'} metadataValue={teaShopName} setMetaDataValue={setTeaShopName} />,
        <MetaDataView key={'Street'} metadataKey={'Street'} metadataValue={teaShopStreetName} setMetaDataValue={setTeaShopStreetName} />,
        <MetaDataView key={'City'} metadataKey={'City'} metadataValue={teaShopCity} setMetaDataValue={setTeaShopCity} />,
        <MetaDataView key={'State'} metadataKey={'State'} metadataValue={teaShopState} setMetaDataValue={setTeaShopState} />,
        <MetaDataView key={'Area Code'} metadataKey={'Area Code'} metadataValue={teaShopAreaCode} setMetaDataValue={setTeaShopAreaCode} />,
    ];

    return (
        <View>
            <View>
                <MaterialCommunityIcons 
                    name='arrow-left'
                    color='white'
                    size={20}
                    onPress={pressedBackButton}
                />
            </View>
            <TouchableHighlight onPress={addOrUpdateBtnPressed}>
                <Text>{mode.toUpperCase()} SHOP</Text>
            </TouchableHighlight>
            <ScrollView>
                { arrOfMetaData }
                {
                    (mode === 'edit') ?
                    <TouchableHighlight onPress={deleteShopBtnPressed}>
                        <Text>DELETE SHOP</Text>
                    </TouchableHighlight> :
                    <></>
                }
            </ScrollView>
        </View>
        
    );
}

export default AddOrEditShop;