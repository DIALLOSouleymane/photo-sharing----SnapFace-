// import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, filter, interval, map, tap } from 'rxjs';
// import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// export class AppComponent implements OnInit {
  // Creation d'une propriete de type FaceSnap
  /* mySnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap; */

  // Utilisation d'un tableau
  // faceSnaps!: FaceSnap[];


  /* ngOnInit(): void {
    this.faceSnaps = [ 
      {
      title: 'ArchiBald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 120,
      location: 'Paris'
    },
    {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les rendonnées',
      imageUrl: '../assets/White_Rock_Mountain.jpg',
      createDate: new Date(),
      snaps: 200
    },

    {
      title: 'Un bon repas',
      description: 'Mmmh, Que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createDate: new Date(),
      snaps: 19,
      location: 'Dakar'
    },

    {
      title: 'ArchiBald',
      description: 'Mon meilleur ami depuis tout petit',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createDate: new Date(),
      snaps: 0,
      location: 'Paris'
    },
    {
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les rendonnées',
      imageUrl: '../assets/White_Rock_Mountain.jpg',
      createDate: new Date(),
      snaps: 10
    },

    {
      title: 'Un bon repas',
      description: 'Mmmh, Que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createDate: new Date(),
      snaps: 255,
      location: 'Dakar'
    }

    ];
  }

}
 */

export class AppComponent implements OnInit {
  interval$!: Observable<string>;
  intervalTest$!: Observable<number>;
  
  ngOnInit(): void {
      /* this.interval$ =  interval(1000).pipe(
        filter(value => value % 3 === 0),
        map(value => value % 2 === 0 ? 
          `Je suis ${value} et je suis pair` :
          `Je suis ${value} et je suis impair`
          ), 
          tap(text => this.logger(text))
      ); */
      this.interval$ =  interval(1000).pipe(
        map(value => value % 2 === 0 ? 
          `Je suis ${value} et je suis pair` :
          `Je suis ${value} et je suis impair`
          ), 
          tap(text => this.logger(text))
      );

      // this.intervalTest$ = interval(1000).subscribe(value => console.log(value !== 3 ? 'Tick' : 'BANG'));
      /*
      setTimeout(() => {
        interval$.subscribe(value => console.log(value));
      }, 3000); */

      // interval$.unsuscribe()
  }

  logger(text: string): void {
    console.log(`Log: ${text}`);
  }
  

}