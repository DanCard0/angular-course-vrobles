import { Component } from '@angular/core';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})
export class PlantillasComponent {
    public titulo:string;
    public administrador;

    public dato_externo = 'Dato externo desde el componente padre';
    public identity_parent = {
        id: 1,
        web: 'www.abc.com',
        tematica: 'desarrollo web'
    };

    public datos_recibidos_hijo:any;

    constructor(){
        this.titulo = 'Plantillas ngTemplate';
        this.administrador = true;
    }

    cambiar() {
        this.administrador = !this.administrador;
    }

    recibirDesdeElHijo(event) {
        this.datos_recibidos_hijo = event;
    }
}