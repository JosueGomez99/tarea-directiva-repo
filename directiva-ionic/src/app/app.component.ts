import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet ,IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonInput, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
