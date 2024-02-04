import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer-caso',
  templateUrl: './primer-caso.component.html',
  styleUrls: ['./primer-caso.component.scss'],
})
export class PrimerCasoComponent implements OnInit {
  counter: number = 0;

  constructor() { }

  ngOnInit() {}

  incrementCounter() {
    this.counter++;
  }
}
