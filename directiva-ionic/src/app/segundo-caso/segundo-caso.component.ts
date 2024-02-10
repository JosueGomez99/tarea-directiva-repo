import { Component, OnInit } from '@angular/core';
import { IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem,IonThumbnail } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-segundo-caso',
  templateUrl: './segundo-caso.component.html',
  styleUrls: ['./segundo-caso.component.scss'],
  standalone:true,
  imports:[IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem,IonThumbnail,CommonModule]
})
export class SegundoCasoComponent implements OnInit {
  animalImages: string[] = ['ruta/leon.jpg', 'ruta/tigre.jpg', 'ruta/elefante.jpg', 'ruta/jirafa.jpg', 'ruta/oso.jpg'];
  
  constructor() { }

  ngOnInit() {
  }
}
