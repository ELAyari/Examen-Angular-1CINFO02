import { Livre } from "./livre";
export class Emprunt  {
    id!: string; 
    livre: Livre = new Livre(); 
    dateEmprunt!: string; 
    dateRetour!: string;
  
    constructor(init?: Partial<Emprunt>) {
      Object.assign(this, init);
    }
  }
  