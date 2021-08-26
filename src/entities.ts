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

export const testTeaShop = new TeaShop('id', 'name', 'streetname', 'state', 'areaCode');

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
