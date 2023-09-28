import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    constructor(private http: HttpClient) { }


    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'ArchiBald',
            description: 'Mon meilleur ami depuis tout petit',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 120,
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les rendonnées',
            imageUrl: '../assets/White_Rock_Mountain.jpg',
            createDate: new Date(),
            snaps: 200
        },
      
        {
            id: 3,
            title: 'Un bon repas',
            description: 'Mmmh, Que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createDate: new Date(),
            snaps: 19,
            location: 'Dakar'
        },
      
        {
            id: 4,
            title: 'ArchiBald',
            description: 'Mon meilleur ami depuis tout petit',
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            createDate: new Date(),
            snaps: 0,
            location: 'Paris'
        },
        {
            id: 5,
            title: 'Three Rock Mountain',
            description: 'Un endroit magnifique pour les rendonnées',
            imageUrl: '../assets/White_Rock_Mountain.jpg',
            createDate: new Date(),
            snaps: 10
        },
      
        {
            id: 6,
            title: 'Un bon repas',
            description: 'Mmmh, Que c\'est bon !',
            imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
            createDate: new Date(),
            snaps: 255,
            location: 'Dakar'
        }
    ]

    /* getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
    } */
    getAllFaceSnaps():Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    // Cette methode recupère le faceSnap cible
    /* getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    } */

    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    }

    /* Nous modifions maintenant snapFaceSnapFaceById de sorte qu'elle accepte
    un deuxième argument permettant de choisir le snapType : snap ou unsnap!
    
    */

    /* snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        // const faceSnap = this.getFaceSnapById(faceSnapId);
        // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    } */
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap> {
        return this.getFaceSnapById(faceSnapId).pipe(
            map(faceSnap => ({
                ...FaceSnap,
                snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`, updatedFaceSnap))
        );
    }

    /* unSnapFaceSnapById(faceSnapId: number): void {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (faceSnap){
            faceSnap.snaps--;
        } else {
            throw new Error('FaceSnap not found!');
        }
    } */

    // Méthode pour l'ajout de nouvelle FaceSnap

    addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string}) {
        const faceSnap: FaceSnap = {
            ...formValue,
            snaps: 0,
            createDate: new Date(),
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
        };

        this.faceSnaps.push(faceSnap);
    }

}