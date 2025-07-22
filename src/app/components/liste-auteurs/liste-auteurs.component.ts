import { Component, OnInit } from '@angular/core';
import { Auteur } from '../../models/auteur';
import { AuteurService } from '../../services/auteur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-auteurs',
  templateUrl: './liste-auteurs.component.html',
  styleUrls: ['./liste-auteurs.component.css']
})
export class ListeAuteursComponent implements OnInit {
 Auteurs: Auteur[] = [];
  constructor(private auteurService: AuteurService, private router: Router) { }
  ngOnInit(): void {
    this.loadAuteurs();
  }

  loadAuteurs(): void {
    this.auteurService.getAuteurs().subscribe(data => {
      this.Auteurs = data;
    });
  }
}
