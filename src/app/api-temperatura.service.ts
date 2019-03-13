import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiTemperaturaService {

  constructor() { }

  public obternerTemperatura(): number {
    return Math.floor(Math.random() * 30) + 12;
  }
}
