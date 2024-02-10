import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonButton,IonContent,IonLabel,IonItem } from '@ionic/angular/standalone'

@Component({
  selector: 'app-primer-caso',
  templateUrl: './primer-caso.component.html',
  styleUrls: ['./primer-caso.component.scss'],
  standalone:true,
  imports:[IonButton,IonContent,IonLabel,IonItem,CommonModule]
})
export class PrimerCasoComponent  implements OnInit {
  contador:number=0;
  clics: number = 0; // Variable para contar los clics


  constructor() { }
    sumar() {
    this.contador++;
    this.clics++; // Incrementa el contador de clics
  }

  ngOnInit() {}

}
