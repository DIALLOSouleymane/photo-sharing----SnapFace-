import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router'
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;

  // title!: string;
  // description!: string;
  // dateCreation!: Date;
  // snaps!: number; //number of likes
  // imageUrl!: string;
  buttonName!: String;
  etatSnap!: boolean;

  // Injection du service faceSnap
  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) { } 

  /* 
    Il y a des chances pour que votre IDE commence déjà à
     souligner en rouge le nom de vos attributs ici. 
     En effet, si vous lisez l'erreur retournée, 
     c'est parce que vous avez créé des propriétés sans les initialiser. 
     Pour "promettre" à TypeScript qu'on va les initialiser, 
     on peut ajouter un bang  !  à chaque propriété : 
  
  */

  /* 
    Pour initialiser ces propriétés en suivant les best practices Angular, 
    vous allez utiliser la méthode  ngOnInit()  
    Pour l'utiliser, votre component doit implémenter l'interface  OnInit  :


  */

  ngOnInit(): void {
    // This method helps us initialise our attributes

    // Initialisation de données avec codage en dur !
    // this.title = 'Archipel Nipon';
    // this.description = 'Mon meilleur ami de longue date !';
    // this.dateCreation = new Date();
    // this.snaps = 10;
    // this.imageUrl ='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonName = 'Oh Snap 👍'
    this.etatSnap = false;
    // Recuperation du parametre id via snapshot
    const snapId = +this.route.snapshot.params['id'];
    // this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(snapId);

    /* 
      La méthode  ngOnInit()  est appelée automatiquement par
        Angular au moment de la création de chaque 
        instance du component.
        Elle permet notamment d'initialiser des propriétés.
    */
  }

  /* onSnap(faceSnapId: number){
    if (this.etatSnap){
      // this.faceSnap.snaps--;
      // Utilisation du service pour unSnap : 
      // this.faceSnapsService.unSnapFaceSnapById(this.faceSnap.id);
      // Utilisation du backend
      // this.faceSnapsService.unSnapFaceSnapById(this.faceSnap.id);
      this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap')
      this.etatSnap = false;
      this.buttonName = 'Oh Snap 👍';
    }
    else{
      // this.faceSnap.snaps++;
      // Same here : using injection service
      // this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap');
      this.etatSnap = true;
      this.buttonName = 'Ops, UnSnap 👎';
    }
  } */
  onSnap(faceSnapId: number){
    if (this.etatSnap){
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => {
          // this.buttonName = 'Oops, UnSnap!';
          this.etatSnap = false;
          this.buttonName = 'Oh Snap 👍';

        })
      );
      
    }
    else{
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => {
          this.etatSnap = true;
          this.buttonName = 'Ops, UnSnap 👎';
        })
      );
      
    }
  }
}
