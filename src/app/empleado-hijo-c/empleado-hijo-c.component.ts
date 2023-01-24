import { Component, Input, OnInit } from '@angular/core';
import { empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent implements OnInit {

  @Input() empleadodelista:empleado;
  @Input() indice:number


  constructor() { }

  ngOnInit(): void {
  }

arrayCaracteristicas = [""]
  agregarCaracteristica(nuevacaracteristica: string) {
  
    this.arrayCaracteristicas.push(nuevacaracteristica);
  
  }

} 
