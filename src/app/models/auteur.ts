export class Auteur {
  id!: string;
  nom!: string;
  nationalite!: string;
 

  constructor(init?: Partial<Auteur>) {
    Object.assign(this, init);
  }
}
