import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// importation pour l'injection du routeur
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})


export class LandingPageComponent implements OnInit{

  userEmail!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
      // this.userEmail = 'me@my-house.sn';
  }

  // Methode de navigation
  onContinue(): void{
    // implementation de la navigation (redirection)
    this.router.navigateByUrl('facesnaps');
  }

  onSubmitForm(form: NgForm) {
    // console.log(this.userEmail);
    console.log(form.value);
  }

}
