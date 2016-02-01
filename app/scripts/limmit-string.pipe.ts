import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'limmitString'})
export class LimmitStringPipe implements PipeTransform {
	transform(value:string, args:string[]) : any {
		var length = parseInt(args[0], 10);
		if (!length) {
            length = 19;
        }
        if (!value) {
            return value;
        }
        if (value.length < length) {
            return value;
        }
        return value.substr(0, length - 4) + ' ...';
	}
}
