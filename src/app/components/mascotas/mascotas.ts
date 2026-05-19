import { Component, Injectable, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { MascotaModel } from '../../models/mascota.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mascotas',
  imports: [FormsModule],
  templateUrl: './mascotas.html',
  styleUrl: './mascotas.css',
})

export class Mascotas implements OnInit {
  // Listado de las mascotas - Asociado a TABLA
  mascotas: MascotaModel[] = [];

  // Mascota individual para registro - Asociado a Formulario
  mascota: MascotaModel = {id: 0, nombre: "", edad: 0};

  // Saber si estamos en edición o en guardar mascota
  enEdicion = false;

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.listar();
  }
  
  listar() {
    // Obtener listado de mascotas
    this.mascotas = this.mascotaService.findAll();
  }  

  guardar() {
    if (this.enEdicion) { // Editar mascota
      this.mascotaService.update({...this.mascota});
      this.enEdicion = false;
    } else { // Guardar mascota
      this.mascotaService.create({...this.mascota});
    }

    this.limpiar();
  }

  limpiar() {
    this.mascota = {id: 0, nombre: "", edad: 0};
  }

  editar(mascotaActualizar: MascotaModel) {
    this.enEdicion = true;
    this.mascota = {...mascotaActualizar};
  }

  eliminar(id: number) {
    this.mascotaService.delete(id);
    this.listar();
  }
}