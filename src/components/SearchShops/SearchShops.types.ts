import { ITeaShop } from '../../entities';

export interface Invokable {
    invoke: (arg0: string) => any,
}

export interface ObjWithItemKey {
    item: ITeaShop,
}