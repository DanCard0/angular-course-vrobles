import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
    public titulo = 'Empleado component';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public color:string;
    public color_seleccionado:string;

    constructor() {
        this.empleado = new Empleado('Carlos Artunduaga', 22, 'Manager', true);
        this.trabajadores = [
            new Empleado('Carlos Artunduaga 2', 22, 'Manager', true),
            new Empleado('Carlos Artunduaga 3', 22, 'Manager', true),
            new Empleado('Carlos Artunduaga 4', 22, 'Manager', true)
        ];
        this.color = 'green';
        this.color_seleccionado = '#ccc';
    }

    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
}