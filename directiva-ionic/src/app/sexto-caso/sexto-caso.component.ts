import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sexto-caso',
  templateUrl: './sexto-caso.component.html',
  styleUrls: ['./sexto-caso.component.scss'],
})
export class SextoCasoComponent implements OnInit {
  colorButton: string = 'primary'; // Puedes cambiar este valor entre 'primary', 'dark' o 'danger'

  constructor() { }

  ngOnInit() {}
}
