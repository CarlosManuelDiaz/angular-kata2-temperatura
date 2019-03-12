import { Component, OnInit, Input } from '@angular/core';
import { Ciudad } from '../ciudad';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  @Input() public ciudades: Array<Ciudad>;

  constructor() { }

  ngOnInit() {
  }

}
