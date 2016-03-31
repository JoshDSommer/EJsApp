import {Injectable} from 'angular2/core';
let externalOptions = require('./options.json');

@Injectable()
export class OptionsService {

	public options: IKidOptions[];
	constructor() {
		this.options = externalOptions;
	}

}


export interface IKidOptions {
	name: string;
	image: string;
	value: string;
}