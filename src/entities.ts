import { AxiosResponse } from 'axios';

export interface IAddress {
	street: string;
	state: string;
	city: string;
	areaCode: string;
}

export interface ITeaShop {
	id?: string;
	name: string;
	address: IAddress;
}

export class Address implements IAddress {
	street: string;
	city: string;
	state: string;
	areaCode: string;

	constructor(street: string, city: string, state: string, areaCode: string) {
		this.street = street;
		this.city = city;
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
		...args: [street: string, city: string, state: string, areaCode: string] | [Address]
	) {
		this.id = id;
		this.name = name;
		if (typeof args[0] === 'string') {
			this.address = new Address(...args as [street: string, city: string, state: string, areaCode: string]);
		} else {
			this.address = args[0];
		}
	}
}

export class TeaShopToAdd implements ITeaShop {
	name: string;
	address: IAddress;

	constructor(
		name: string,
		...args: [streetName: string, city: string, state: string, areaCode: string] | [Address]
	) {
		this.name = name;
		if (typeof args[0] === 'string') {
			this.address = new Address(...args as [streetName: string, city: string, state: string, areaCode: string]);
		} else {
			this.address = args[0];
		}
	}
}

export const testTeaShop = new TeaShop('id', 'name', 'streetname', 'city', 'state', 'areaCode');

export const testTeaShopToAdd = new TeaShopToAdd('name', 'streetname', 'city', 'state', 'areaCode');

export class TeaShopsState {
	teaShops: TeaShop[];
	getAllTeaShopsLoading: boolean;
	addTeaShopLoading: boolean;
	getAllTeaShopsError: Error | null;
	addTeaShopError: Error | null;
	constructor(teaShops: TeaShop[], getAllTeaShopsLoading: boolean = false,  addTeaShopLoading: boolean = false, getAllTeaShopsError: Error | null = null, addTeaShopError: Error | null = null) {
		this.teaShops = teaShops;
		this.getAllTeaShopsLoading = getAllTeaShopsLoading;
		this.addTeaShopLoading = addTeaShopLoading;
		this.getAllTeaShopsError = getAllTeaShopsError;
		this.addTeaShopError = addTeaShopError;
	}
}

export const initialTeaShopsState = new TeaShopsState([testTeaShop]);

export class State {
	teaShops: TeaShopsState;
	constructor(teaShops: TeaShopsState) {
		this.teaShops = teaShops;
	}
}

export interface Invokable {
    invoke: (arg0: string) => any,
}

export const endpoint = process.env.ENDPOINT || 'http://localhost:3000/api/teaShops/';

export interface Mockable {
    mockResolvedValue: any,
    mockResolvedValueOnce: any,
    mockImplementation: (...args: any) => any,
    mockImplementationOnce: (...args: any) => any,
    mockReturnedValue: any,
    mockReturnedValueOnce: any,
}

export const testError = new Error('test error');

export const mockGetAllShopsFromAPI = {data: {teaShops: [testTeaShop]}};

export const onComponentDidMountOnly: [] = [];

export const testState = new State(initialTeaShopsState);
