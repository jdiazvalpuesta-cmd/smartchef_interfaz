import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-mi-espacio',
  templateUrl: './mi-espacio.page.html',
  styleUrls: ['./mi-espacio.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class MiEspacioPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
