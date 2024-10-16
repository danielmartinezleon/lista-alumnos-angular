import { Component } from '@angular/core';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  nif: string;
  edad: number;
  curso: string;
}

const LISTA_ALUMNOS: Alumno[] = [
  { id: 1, nombre: 'Juan', apellido: 'Pérez', nif: '12345678A', edad: 25, curso: 'Angular' },
  { id: 2, nombre: 'María', apellido: 'Gómez', nif: '87654321B', edad: 30, curso: 'React' },
  { id: 3, nombre: 'Pedro', apellido: 'Sánchez', nif: '12348765C', edad: 22, curso: 'Vue' },
  { id: 4, nombre: 'Ana', apellido: 'Martínez', nif: ' 87651234D', edad: 28, curso: 'Svelte' },
  { id: 5, nombre: 'Luis', apellido: 'García', nif: '12345678E', edad: 35, curso: 'Angular' },
  { id: 6, nombre: 'Carmen', apellido: 'López', nif: '87654321F', edad: 40, curso: 'React' },
  { id: 7, nombre: 'Javier', apellido: 'González', nif: '12348765G', edad: 32, curso: 'Vue' },
  { id: 8, nombre: 'Rosa', apellido: 'Fernández', nif: '87651234H', edad: 27, curso: 'Svelte' },
  { id: 9, nombre: 'Miguel', apellido: 'Rodríguez', nif: '12345678I', edad: 33, curso: 'Angular' },
  { id: 10, nombre: 'Sara', apellido: 'Pérez', nif: '87654321J', edad: 38, curso: 'React' },
  { id: 11, nombre: 'Carlos', apellido: 'Gómez', nif: '12348765K', edad: 29, curso: 'Vue' },
  { id: 12, nombre: 'Isabel', apellido: 'Sánchez', nif: '87651234L', edad: 24, curso: 'Svelte' },
  { id: 13, nombre: 'Antonio', apellido: 'Martínez', nif: '12345678M', edad: 31, curso: 'Angular' },
  { id: 14, nombre: 'Elena', apellido: 'García', nif: '87654321N', edad: 36, curso: 'React' },
  { id: 15, nombre: 'Manuel', apellido: 'López', nif: '12348765O', edad: 23, curso: 'Vue' },
  { id: 16, nombre: 'Cristina', apellido: 'González', nif: '87651234P', edad: 26, curso: 'Svelte' },
];



@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrl: './lista-alumnos.component.css'
})

export class ListaAlumnosComponent {
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'nif', 'edad', 'curso'];
  dataSource = LISTA_ALUMNOS;
}
