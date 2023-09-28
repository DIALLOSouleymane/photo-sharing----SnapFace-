import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.constructor.model';

/* @Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // On modifie son url
  templateUrl: './app.component.old.html',
  styleUrls: ['./app.component.scss']
}) */
class AppComponent implements OnInit {
  // Creation d'une propriete de type FaceSnap
  mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;


  ngOnInit(): void {
    this.mySnap = new FaceSnap(
      'ArchiBald',
      'Mon meilleur ami depuis tout petit',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      0
    );

    this.myOtherSnap = new FaceSnap(
      'Three Rock Mountain',
      'Un endroit magnifique pour les rendonnées',
      '../assets/White_Rock_Mountain.jpg',
      new Date(),
      0
    );

    this.myLastSnap = new FaceSnap(
      'Un bon repas',
      'Mmmh, Que c\'est bon !',
      'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      new Date(),
      0
    );
  }

}
