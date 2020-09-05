import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })
export class ConversorPipe implements PipeTransform{
    transform(value:number, por:number) {
        return value + " por " + por + " es igual a " + (value * por);
    }
}