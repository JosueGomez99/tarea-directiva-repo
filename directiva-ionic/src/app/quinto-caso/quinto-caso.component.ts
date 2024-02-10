// quinto-caso.component.ts
import { Component } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-quinto-caso',
  templateUrl: './quinto-caso.component.html',
  styleUrls: ['./quinto-caso.component.scss'],
  standalone:true,
  imports:[IonLabel,NgStyle]
})
export class QuintoCasoComponent {
  colorVariable: string = '#2aff2b';
}
