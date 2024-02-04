import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.component.html',
  styleUrls: ['./segundo-caso.component.scss'],
})
export class SegundoCasoComponent implements OnInit {
  names: string[] = ['Perro', 'Gato', 'Conejo', 'Pájaro', 'Tigre'];

  constructor() { }

  ngOnInit() {}
}
