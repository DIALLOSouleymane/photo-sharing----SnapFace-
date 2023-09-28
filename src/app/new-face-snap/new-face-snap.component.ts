import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FaceSnap } from '../models/face-snap.model';
import { Observable, map } from 'rxjs';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit{

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;
  // Injection de l'outil qui simplifie la generation des formulaires
  constructor(private formBuilder: FormBuilder,
    private faceSnapService: FaceSnapsService,
    private router: Router) { }

  // Maintenant dans ngOnInit, nous utilisons formBuilder pour la construction du formulaire
  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
      this.snapForm = this.formBuilder.group({
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
        location: [null]
      },
      {
        updateOn: 'blur'
      });

      this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
        map(formValue => ({
          ...formValue, 
          // recupere tous les champs et les valeurs
          createDate: new Date(),
          snaps: 0,
          id: 0
        }))
      );
  }

  onSubmitForm() {
    // console.log(this.snapForm.value);
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
  }



}
