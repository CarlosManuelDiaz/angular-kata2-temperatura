import { Component } from '@angular/core';
import { Ciudad } from './ciudad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'temperatura';
  public misciudades: Array<Ciudad> = [];

  public agregarCiudad(nombre: string): void {
    this.misciudades.push({
      nombre,
      temperatura: {
        valor: 20,
        tipo: 'ºC'
      }
    });
    console.log(this.misciudades);
  }
}
