import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import { Producto } from '../producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  public miproducto: Producto;


  constructor( private route: ActivatedRoute, private product: ProductoService) {
    const nombredeproducto = this.route.snapshot.paramMap.get('idproducto');
    this.miproducto = this.product.obtenerproducto(nombredeproducto);
  }

  ngOnInit() {
  }
}
