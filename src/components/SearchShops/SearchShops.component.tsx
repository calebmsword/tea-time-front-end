import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { getAllTeaShops, getAllTeaShopsFailed } from '../../redux/actions/teaShopActions';
import { State } from '../../redux/reducers/rootReducer';
import LoadingSearchedShops from '../LoadingSearchedShops/LoadingSearchedShops.component'
import { ITeaShop } from '../../redux/types';


const componentDidMount: [] = [];

const SearchShops : React.FC = () => {
    const dispatch = useDispatch();
    const { loading, teaShops, error } = useSelector(
        (state: State) => state.teaShops
    )

    useEffect( () => {
        dispatch(getAllTeaShops());
    }, componentDidMount)

    return (
        <View>
            <LoadingSearchedShops loading={loading}/>
            { error ? (
                <Text>{error.message}</Text>
            ) : (
                teaShops.map( (teaShop: ITeaShop, index:number | string) => (
                    <View key={teaShop.id}>
                        <Text>Tea shop {index}: {teaShop.name}</Text>
                    </View>
                    
                ))
            )}
        </View>
    );
}

SearchShops.displayName = 'SearchShops';
export default SearchShops;