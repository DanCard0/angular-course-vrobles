import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent {
    public nombre_componente = 'Componente de fruta';
    public lista_frutas = 'Naranja, pera, manzana';
    public nombre:string = 'Daniel';
    public trabajos:Array<any> = ['Carpintero', 42, 'Electricista'];

    constructor() {
        console.log(this.trabajos);
    }

    ngOnInit() {
        this.holaMundo();
    }

    holaMundo() {
        console.log('Hey, hello world');
    }
}