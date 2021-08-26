export interface IAddress {
	streetName: string;
	state: string;
	areaCode: string;
}

export interface ITeaShop {
	id: string;
	name: string;
	address: IAddress;
}

export class Address implements IAddress {
	streetName: string;
	state: string;
	areaCode: string;

	constructor(streetName: string, state: string, areaCode: string) {
		this.streetName = streetName;
		this.state = state;
		this.areaCode = areaCode;
	}
}

export class TeaShop implements ITeaShop {
	id: string;
	name: string;
	address: IAddress;

	constructor(
		id: string,
		name: string,
		...args: [streetName: string, state: string, areaCode: string] | [Address]
	) {
		this.id = id;
		this.name = name;
		if (typeof args[0] === 'string') {
			this.address = new Address(...args as [streetName: string, state: string, areaCode: string]);
		} else {
			this.address = args[0];
		}
	}
}

export enum TeaShopActionTypes {
    GET_ALL_TEASHOPS = 'GET_ALL_TEASHOPS',
    GET_ALL_TEASHOPS_SUCCESS = 'GET_ALL_TEASHOPS_SUCCESS',
    GET_ALL_TEASHOPS_FAILURE = 'GET_ALL_TEASHOPS_FAILURE',
}

export interface TeaShopAction {
    type: TeaShopActionTypes,
    payload?: any,
}

export interface TeaShopState {
    loading: boolean,
    teaShops: ITeaShop[],
    error: Error | null,
}