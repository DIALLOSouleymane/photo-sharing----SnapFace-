import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleFaceSnapComponent } from "./single-face-snap/single-face-snap.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";

const routes: Routes = [
    // Creons une première route faceSnaps qui affichera le component
    // FaceSnapListComponent
    // Pour cela, on crée un objet comme ceci : 
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent},
    { path: 'facesnaps', component: FaceSnapListComponent},
    { path: 'create', component: NewFaceSnapComponent },
    { path: '', component: LandingPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}