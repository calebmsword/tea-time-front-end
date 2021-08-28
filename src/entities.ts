export interface IAddress {
	streetName: string;
	state: string;
	city: string;
	areaCode: string;
}

export interface ITeaShop {
	id: string;
	name: string;
	address: IAddress;
}

export class Address implements IAddress {
	streetName: string;
	city: string;
	state: string;
	areaCode: string;

	constructor(streetName: string, city: string, state: string, areaCode: string) {
		this.streetName = streetName;
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
		...args: [streetName: string, city: string, state: string, areaCode: string] | [Address]
	) {
		this.id = id;
		this.name = name;
		if (typeof args[0] === 'string') {
			this.address = new Address(...args as [streetName: string, city: string, state: string, areaCode: string]);
		} else {
			this.address = args[0];
		}
	}
}

export const testTeaShop = new TeaShop('id', 'name', 'streetname', 'city', 'state', 'areaCode');

export class TeaShopsState {
	teaShops: TeaShop[];
	loading: boolean;
	error: Error | null;
	constructor(teaShops: TeaShop[], loading: boolean = false, error: Error | null = null) {
		this.teaShops = teaShops;
		this.loading = loading;
		this.error = error;
	}
}

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

export const testError = new Error('test Error');

export const mockGetAllShopsFromAPI = {data: {teaShops: [testTeaShop]}};