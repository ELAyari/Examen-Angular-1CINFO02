import { Component } from '@angular/core';

import { Livre } from '../../models/livre';
import { Auteur } from '../../models/auteur';
import { LivreService } from '../../services/livre.service';
import { AuteurService } from '../../services/auteur.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
 Auteurs: Auteur[] = [];
 Livres: Livre[] = [];
  constructor(private auteurService: AuteurService,private livreService: LivreService ) { }
  ngOnInit(): void {
  
  this.auteurService.getAuteurs().subscribe(data => {
    this.Auteurs = data;
  });
  this.livreService.getLivres().subscribe(data => {
    this.Livres = data;
  });
}

}
