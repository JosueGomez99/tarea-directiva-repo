import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonButton} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonList,IonButton,RouterLink],
})
export class HomePage {
  constructor() {}
}
