import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";
@Injectable()

export class EmpleadosService{
    caracteristicasEmpleado: any;

    constructor (private servicioVentanaEmergente: ServicioEmpleadosService) {
    
   
    }
   
    empleados:Empleado[]=[
  
        new Empleado("Juan","Diaz","Presidente",7500),
        new Empleado("Ana","Lopez","Directora",6500),
        new Empleado("María","García","Jefe de seccion",5500),
        new Empleado("Juana","Perez","Administrativ",4500),
        new Empleado("Pedrito","Perez","Chalan",500)


    ];


    agregarEmpleadoServicio(empleado: Empleado){
    
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar: " + "\n" + empleado.nombre +"\n" + "Salario: " +  empleado.salario)
        this.empleados.push(empleado);
       
    }
    
 



}