import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuarto-caso',
  templateUrl: './cuarto-caso.component.html',
  styleUrls: ['./cuarto-caso.component.scss'],
})
export class CuartoCasoComponent implements OnInit {
  numberValue: number = 80; // Puedes cambiar este valor entre 0 y 100

  constructor() { }

  ngOnInit() {}
}
