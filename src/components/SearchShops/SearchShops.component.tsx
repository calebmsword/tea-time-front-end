import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, TextInput, FlatList } from 'react-native';
import { getAllTeaShops } from '../../redux/actions/teaShopActions';
import { State } from '../../redux/reducers/rootReducer';
import LoadingSearchedShops from '../LoadingSearchedShops/LoadingSearchedShops.component'
import { ITeaShop } from '../../redux/types';
import ShopInList from '../ShopInList/ShopInList.component';
import { ObjWithItemKey } from './SearchShops.types';

const componentDidMount: [] = [];

export const byHavingPropertyWhoseValueIs = (text:string) => (teaShop:ITeaShop) => {
    if (text === '') {
        return false;
    }
    let propertyContainsText:boolean = false;
    for(const property of Object.values(teaShop)) {
        if (typeof property === 'object') {
            for(const nestedProperty of Object.values(property)) {
                propertyContainsText = propertyContainsText || (nestedProperty as string).includes(text);
            }
        } else if (typeof property === 'string') {
            propertyContainsText = propertyContainsText || property.includes(text);
        }
    }
    return propertyContainsText;
}

const SearchShops : React.FC = () => {
    const [searchBarText, setSearchBarText] = useState('');
    const dispatch = useDispatch();
    const { loading, teaShops, error } = useSelector( (state: State) => state.teaShops);

    useEffect( () => {
            dispatch(getAllTeaShops());
        }, 
        componentDidMount
    );

    return (
        <View>
            <TextInput value={searchBarText} onChangeText={setSearchBarText} />
            <LoadingSearchedShops loading={loading}/>
            { error ? (
                <Text>Hm... something went wrong. Our diagnostics say: {error.message}</Text>
            ) : (
                    <FlatList 
                        data={teaShops.filter(byHavingPropertyWhoseValueIs(searchBarText))}
                        renderItem={(item:ObjWithItemKey) => <ShopInList teaShop={item.item} />} 
                        keyExtractor={item => item.id}
                    />
            )}
        </View>
    );
}

SearchShops.displayName = 'SearchShops';
export default SearchShops;