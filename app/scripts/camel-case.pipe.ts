import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'camelCase'})
export class CamelCasePipe implements PipeTransform {
	transform(value:string, args:string[]) : any {
		return value.replace(/([A-Z])/g, ' $1')
                .replace(/^./, function (str) {
                    return str.toUpperCase();
                });
	}
}
