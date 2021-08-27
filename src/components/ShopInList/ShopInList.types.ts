import { ITeaShop } from '../../entities';

interface Props {
    teaShop: ITeaShop,
} 

export interface Invokable {
    invoke: (propName: string) => any,
}

export default Props;