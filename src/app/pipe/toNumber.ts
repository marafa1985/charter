import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'toNumber' })
export class ToNumberPipe implements PipeTransform {
    transform(size, args: string[]): any {
        const newArray = [];
        for (let i = 0; i < size; i++) {
            newArray.push(i);
        }
        return newArray;
    }
}
