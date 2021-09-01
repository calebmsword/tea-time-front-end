import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { getAllTeaShops } from '../../redux/actions/teaShopActions';
import ErrorSearchedShops from '../ErrorSearchedShops/ErrorSearchedShops.component';
import LoadingSearchedShops from '../LoadingSearchedShops/LoadingSearchedShops.component'
import ShopInList from '../ShopInList/ShopInList.component';
import { ObjWithItemKey } from './SearchShops.types';
import { byHavingPropertyWhoseValueIncludes } from './SearchShops.helpers';
import styles from './SearchShops.styles'
import Header from '../Header/Header.component'
import { onComponentDidMountOnly, ReduxStoreState } from '../../entities';
import { useNavigation } from '@react-navigation/native';


const SearchShops : React.FC = () => {
    const [searchBarText, setSearchBarText] = useState('');
    const dispatch = useDispatch();
    const { getAllTeaShopsLoading, teaShops, getAllTeaShopsError, deleteTeaShopError } = useSelector( (state: ReduxStoreState) => state.teaShops);

    const navigation = useNavigation<any>();

    useEffect( () => {
            dispatch(getAllTeaShops());
        }, 
        onComponentDidMountOnly
    );
    
    return (
        <View>
            <Header />
            <View style={{ flexDirection: 'row', }}>
                <TextInput style={styles.searchBar} value={searchBarText} onChangeText={setSearchBarText} />
                {/* <Image style={{width: 100, height: 40, }} resizeMode='contain' source={require('../../../assets/imblackyall.png')} /> */}
                <TouchableOpacity testID='add-shop-btn' style={styles.addShopBtn} onPress={ () => navigation.navigate('add', {mode: 'add'})}>
                    <Text style={styles.addShopBtnText}>ADD NEW SHOP</Text>
                </TouchableOpacity>
            </View>
            <LoadingSearchedShops loading={getAllTeaShopsLoading}/>
            { getAllTeaShopsError || deleteTeaShopError ? <ErrorSearchedShops error={deleteTeaShopError ? deleteTeaShopError : getAllTeaShopsError} /> : (
                    <FlatList 
                        data={teaShops.filter(byHavingPropertyWhoseValueIncludes(searchBarText))}
                        renderItem={(item:ObjWithItemKey) => <ShopInList teaShop={item.item} />} 
                    />
            )}
        </View>
    );
}



SearchShops.displayName = 'SearchShops';
export default SearchShops;