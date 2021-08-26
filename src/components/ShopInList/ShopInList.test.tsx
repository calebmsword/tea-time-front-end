import { shallow, ShallowWrapper } from "enzyme";
import { Text } from 'react-native';
import { testTeaShop } from '../../entities';
import { Invokable } from './ShopInList.types'

import ShopInList from './ShopInList.component';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({ navigate: mockNavigate }),
}));

describe('testing ShopInList', () => {
    beforeEach( () => {
        wrapper = shallow( <ShopInList teaShop={testTeaShop}/>);
    });

    it('should display the name of the given shop', () => {
        const nameIsDisplayed:boolean = wrapper
            .find(Text)
            .someWhere( (node:ShallowWrapper) => 
                node.shallow().text().includes(testTeaShop.name)
            );
        expect(nameIsDisplayed).toBeTruthy();
    });


    it('pressing the component should link somewhere', () => {
        (wrapper as Invokable).invoke('onPress')();
        expect(mockNavigate).toHaveBeenCalled();
    });
});

let wrapper:ShallowWrapper;