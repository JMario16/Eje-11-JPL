import { Injectable } from '@angular/core';
import { MascotaModel } from '../models/mascota.model';

@Injectable({
  providedIn: 'root',
})

export class MascotaService {
  // Datos In Memory, sin consumo de API

  // Mascotas es un arreglo de MascotaModel
  mascotas: MascotaModel[] = [];
  idContador = 0;

  constructor() {
    // Iniciamos algunas mascotas
    this.mascotas = [
      {id: 1, nombre: "Maya", edad: 4},
      {id: 2, nombre: "Solovino", edad: 10}
    ]

    this.idContador = 3;
  }

  create(mascota: MascotaModel) {
    mascota.id = this.idContador++;
    this.mascotas.push(mascota);
  }

  findAll() {
    return this.mascotas;
  }

  delete() {

  }
}