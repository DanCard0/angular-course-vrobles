import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'componente-hijo',
    template: `
        <hr/>
        <strong>Este es el {{title}}</strong>
        <ul>
            <li>{{propiedad_uno}}</li>
            <li>{{propiedad_dos}}</li>
            <li>{{propiedad_tres}}</li>
            <li>{{propiedad_cuatro.id}}</li>
            <li>{{propiedad_cuatro.web}}</li>
            <li>{{propiedad_cuatro.tematica}}</li>
        </ul>
        <button (click)="enviarAlPadre()">Enviar al padre</button>
    `
})
export class HijoComponent {
    public title:string;

    @Input() propiedad_uno:string;
    @Input('alias_propiedad_dos') propiedad_dos:string;
    @Input() propiedad_tres:string;
    @Input() propiedad_cuatro:any;

    @Output() desde_el_hijo = new EventEmitter();

    constructor() {
        this.title = 'Componente hijo'
    }

    enviarAlPadre() {
        this.desde_el_hijo.emit({ nombre: 'Nombre desde el componente hijo' })
    }
}