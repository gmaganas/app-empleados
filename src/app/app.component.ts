import { Component } from '@angular/core';
import { empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Lista de empleados';

  empleados:empleado[]=[
  
    new empleado("Juan","Diaz","Presidente",7500),
    new empleado("Ana","Lopez","Directora",6500),
    new empleado("María","García","Jefe de seccion",5500),
    new empleado("Juana","Perez","Administrativ",4500),
    new empleado("Pedrito","Perez","Chalan",500)


  ];

agregarEmpleado(){
  let miEmpleado=new empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroPuesto, this.cuadroSalario)
  this.empleados.push(miEmpleado)
}

cuadroNombre:string="";
cuadroApellido:string="";
cuadroPuesto:string="";
cuadroSalario:number=0;


}
