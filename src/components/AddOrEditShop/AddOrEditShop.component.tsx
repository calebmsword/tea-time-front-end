import React, { useState } from 'react';
import { View, ScrollView, TouchableHighlight, Text, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Props from './AddOrEditShop.types'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { addTeaShop, deleteTeaShop, getAllTeaShops } from '../../redux/actions/teaShopActions';
import { TeaShop, TeaShopToAdd, ReduxStoreState } from '../../entities';
import MetaDataView from '../MetaDataView/MetaDataView.component';

const AddOrEditShop : React.FC<Props> = ( {route} ) => {
    const { mode, teaShop } = route.params;
    
    AddOrEditShop.displayName = `${mode}shop`;

    const [teaShopName, setTeaShopName] = useState(teaShop ? teaShop.name : '');
    const [teaShopStreet, setTeaShopStreet] = useState(teaShop ? teaShop.address.street : '');
    const [teaShopCity, setTeaShopCity] = useState(teaShop ? teaShop.address.city : '');
    const [teaShopState, setTeaShopState] = useState(teaShop ? teaShop.address.state : '');
    const [teaShopAreaCode, setTeaShopAreaCode] = useState(teaShop ? teaShop.address.areaCode : '');
    
    const {addOrEditTeaShopLoading, addOrEditTeaShopError, deleteTeaShopLoading, deleteTeaShopError } = useSelector( (state: ReduxStoreState) => state.teaShops);

    const dispatch = useDispatch();
    const navigation = useNavigation<any>();

    const addOrUpdateBtnPressed = () => {
        if (mode === 'add') {
            const teaShopToAdd = new TeaShopToAdd(teaShopName, teaShopStreet, teaShopCity, teaShopState, teaShopAreaCode);
            dispatch(addTeaShop(teaShopToAdd));
            dispatch(getAllTeaShops());
            navigation.navigate('search');
        } else if (mode === 'edit' ) {
            const teaShopToEdit = new TeaShop((teaShop as TeaShop).id, teaShopName, teaShopStreet, teaShopCity, teaShopState, teaShopAreaCode);
            dispatch(addTeaShop(teaShopToEdit));
            dispatch(getAllTeaShops());
        }
    }

    const deleteShopBtnPressed = () => {
        dispatch(deleteTeaShop((teaShop as TeaShop).id));
        dispatch(getAllTeaShops());
        navigation.navigate('search');
    }

    const pressedBackButton = () => {
        navigation.navigate('search');
    }

    const arrOfMetaData = [
        <MetaDataView key={'Name'} metadataKey={'Name'} metadataValue={teaShopName} setMetaDataValue={setTeaShopName} />,
        <MetaDataView key={'Street'} metadataKey={'Street'} metadataValue={teaShopStreet} setMetaDataValue={setTeaShopStreet} />,
        <MetaDataView key={'City'} metadataKey={'City'} metadataValue={teaShopCity} setMetaDataValue={setTeaShopCity} />,
        <MetaDataView key={'State'} metadataKey={'State'} metadataValue={teaShopState} setMetaDataValue={setTeaShopState} />,
        <MetaDataView key={'Area Code'} metadataKey={'Area Code'} metadataValue={teaShopAreaCode} setMetaDataValue={setTeaShopAreaCode} />,
    ];

    return (
        <View>
            <Modal visible={addOrEditTeaShopLoading || deleteTeaShopLoading} >
                <Text>Loading...</Text>
            </Modal>
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
            {
                addOrEditTeaShopError || deleteTeaShopError ?
                    <Text>Hm...something went wrong. Our diagnostics say {addOrEditTeaShopError ? addOrEditTeaShopError.message : deleteTeaShopError.message }</Text>
                : 
                    <ScrollView>
                        { 
                            arrOfMetaData
                        }
                        {
                            (mode === 'edit') ?
                            <TouchableHighlight onPress={deleteShopBtnPressed}>
                                <Text>DELETE SHOP</Text>
                            </TouchableHighlight> :
                            <></>
                        }
                    </ScrollView>
            }
        </View>
        
    );
}

export default AddOrEditShop;