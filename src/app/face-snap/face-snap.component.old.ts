import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  // templateUrl: './face-snap.component.html',
  template: '',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  // new
  @Input() FaceSnap!: FaceSnap;
  title!: string;
  description!: string;
  dateCreation!: Date;
  snaps!: number; //number of likes
  imageUrl!: string;
  buttonName!: String;
  etatSnap!: boolean;
faceSnap: any;

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
      this.title = 'Archipel Nipon';
      this.description = 'Mon meilleur ami de longue date !';
      this.dateCreation = new Date();
      this.snaps = 10;
      this.imageUrl = 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
      this.buttonName = 'Oh Snap 👍'
      this.etatSnap = false;

      /* 
        La méthode  ngOnInit()  est appelée automatiquement par
         Angular au moment de la création de chaque 
         instance du component.
          Elle permet notamment d'initialiser des propriétés.
      */
  }

  onSnap(){
    if (this.etatSnap){
      this.snaps--;
      this.etatSnap = false;
      this.buttonName = 'Oh Snap 👍';
    }
    else{
      this.snaps++;
      this.etatSnap = true;
      this.buttonName = 'Ops, UnSnap 👎';
    }
  }

}
