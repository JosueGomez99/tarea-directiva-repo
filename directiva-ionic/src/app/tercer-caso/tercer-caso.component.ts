// tercer-caso.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonInput } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tercer-caso',
  templateUrl: './tercer-caso.component.html',
  styleUrls: ['./tercer-caso.component.scss'],
  standalone: true,
  imports: [IonInput, CommonModule, FormsModule],
})
export class TercerCasoComponent {
  phoneNumber: string = '';

  guardarNumero() {
    console.log('Número de teléfono guardado:', this.phoneNumber);
    
  }
}
