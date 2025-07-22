import { Auteur } from "./auteur";
export class Livre {
    id!: string;
    titre!: string;
    annee!: number;
    auteur: Auteur = new Auteur(); 
    disponible: boolean = true; 
  
    constructor(init?: Partial<Livre>) {
      Object.assign(this, init);
    }
  }
  