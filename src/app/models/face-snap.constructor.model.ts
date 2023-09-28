export class FaceSnap {
    constructor(
        public title: string,
        public description: string,
        public imageUrl: string,
        public creationDate: Date,
        public snaps: number,
        // Ajout d'une propriété optionnelle
        public location?: string){

        }
}