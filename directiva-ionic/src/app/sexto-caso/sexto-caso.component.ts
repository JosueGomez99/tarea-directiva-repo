// sexto-caso.component.ts
import { Component } from '@angular/core';
import { NgSwitch,NgSwitchCase,CommonModule } from '@angular/common';
import { IonContent,IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-sexto-caso',
  templateUrl: './sexto-caso.component.html',
  styleUrls: ['./sexto-caso.component.scss'],
  standalone:true,
  imports:[IonContent,IonButton,NgSwitch,NgSwitchCase,CommonModule]
})
export class SextoCasoComponent {
  colorButton: string = "primary"; // Se establece inicialmente en "primary"

  cambiarColor() {
    switch (this.colorButton) {
      case 'primary':
        this.colorButton = 'dark';
        break;
      case 'dark':
        this.colorButton = 'danger';
        break;
      case 'danger':
        this.colorButton = 'medium';
        break;
      case 'medium':
        this.colorButton = 'primary';
        break;
      default:
        this.colorButton = 'primary'; // En caso de que el valor no coincida con ninguno de los anteriores
    }
  }
}