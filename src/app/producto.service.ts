import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  public productos: Array<Producto> = [{
    nombre: 'cama',
    precio: 100,
    imagen: 'https://www.laoca.es/img/personalizacion/laoca/products/list/8499996725578.jpg',
  }, {
    nombre: 'martillo',
    precio: 10,
    imagen: 'https://promart.vteximg.com.br/arquivos/ids/211101-1000-1000/56642.jpg?v=635985071414100000',
  }];

  public productonoencontrado: Producto = {
    nombre: 'Producto no encontrado',
    precio: 0,
    imagen: 'https://previews.123rf.com/images/houbacze/houbacze1709/houbacze170900461/86376823-dise%C3%B1o-plano-rojo-no-encontrado.jpg'
  };

  constructor() { }

  public obtenerproducto(nombre: string): Producto {
    let productos = this.productos.find((producto) => producto.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase());
    if (!productos) {
      productos = this.productonoencontrado;
    }
    return productos;
  }
}
