import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-cocinar',
  templateUrl: './cocinar.page.html',
  styleUrls: ['./cocinar.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
})
export class CocinarPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
