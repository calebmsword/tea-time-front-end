import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import { getAllTeaShops } from '../../redux/actions/teaShopActions';
import { State } from '../../redux/reducers/rootReducer';
import LoadingSearchedShops from '../LoadingSearchedShops/LoadingSearchedShops.component'
import ShopInList from '../ShopInList/ShopInList.component';
import { ObjWithItemKey } from './SearchShops.types';
import { byHavingPropertyWhoseValueIncludes } from './SearchShops.helpers';
import styles from './SearchShops.styles'
import Header from '../Header/Header.component'

const componentDidMount: [] = [];

const SearchShops : React.FC = () => {
    const [searchBarText, setSearchBarText] = useState('MaTt');
    const dispatch = useDispatch();
    const { loading, teaShops, error } = useSelector( (state: State) => state.teaShops);

    useEffect( () => {
            dispatch(getAllTeaShops());
        }, 
        componentDidMount
    );

    return (
        <View>
            <Header />
            <View style={{ flexDirection: 'row', }}>
                <TextInput style={styles.searchBar} value={searchBarText} onChangeText={setSearchBarText} />
                {/* <Image style={{width: 100, height: 40, }} resizeMode='contain' source={require('../../../assets/imblackyall.png')} /> */}
                <TouchableOpacity style={styles.addShopBtn} onPress={ () => {/**no-op*/}}>
                    <Text style={styles.addShopBtnText}>ADD NEW SHOP</Text>
                </TouchableOpacity>
            </View>
            <LoadingSearchedShops loading={loading}/>
            { error ? (
                <Text>Hm... something went wrong. Our diagnostics say: {error.message}</Text>
            ) : (
                    <FlatList 
                        data={teaShops.filter(byHavingPropertyWhoseValueIncludes(searchBarText))}
                        renderItem={(item:ObjWithItemKey) => <ShopInList teaShop={item.item} />} 
                        keyExtractor={item => item.id}
                    />
            )}
        </View>
    );
}



SearchShops.displayName = 'SearchShops';
export default SearchShops;