import { Component } from '@angular/core';
import { Ciudad } from './ciudad';
import { FLAGS } from '@angular/core/src/render3/interfaces/view';
import { ApiTemperaturaService } from './api-temperatura.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Temperaturas';
  public misciudades: Array<Ciudad> = [];
  msg = '';

  constructor(private apiTemp: ApiTemperaturaService) {}

  public agregarCiudad(nombre: string): void {
    this.misciudades.push({
      nombre,
      temperatura: {
        valor: this.apiTemp.obternerTemperatura(),
        tipo: 'ºC'
      }
    });
    this.msg = 'Ciudad Agregada';
  }
  public closealert(): void {
    this.msg = '';
  }

}
