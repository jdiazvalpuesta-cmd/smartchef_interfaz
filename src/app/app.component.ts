import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home, homeOutline, search, searchOutline, bag, bagOutline, person, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({
      home,
      homeOutline,
      search,
      searchOutline,
      bag,
      bagOutline,
      person,
      personOutline,
    });
  }
}
