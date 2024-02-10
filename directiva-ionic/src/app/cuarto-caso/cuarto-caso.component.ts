import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cuarto-caso',
  templateUrl: './cuarto-caso.component.html',
  styleUrls: ['./cuarto-caso.component.scss'],
  standalone:true,
  imports:[NgClass,RouterLink,IonButton]
})
export class CuartoCasoComponent {
  valor: number = this.generarNumero(); // Inicializar con un número aleatorio

  // Método para generar un nuevo número entre 0 y 100
  generarNumero(): number {
    return Math.floor(Math.random() * 101); // Generar un número aleatorio entre 0 y 100
  }

  // Método para generar un nuevo número y actualizar el valor
  cambiarValor() {
    this.valor = this.generarNumero();
  }
}