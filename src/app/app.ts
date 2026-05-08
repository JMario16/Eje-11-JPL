import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Mascotas } from './components/mascotas/mascotas';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Mascotas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eje-11-jpl');
}
