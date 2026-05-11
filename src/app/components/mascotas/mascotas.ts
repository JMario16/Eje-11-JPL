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
    this.mascotaService.create(this.mascota);
    this.listar();
  }

  editar() {

  }

  eliminar() {

  }
}