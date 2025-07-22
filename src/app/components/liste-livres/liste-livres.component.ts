import { Component } from '@angular/core';
import { Livre } from '../../models/livre';
import { LivreService } from '../../services/livre.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-livres',
  templateUrl: './liste-livres.component.html',
  styleUrls: ['./liste-livres.component.css']
})
export class ListeLivresComponent {
Livres: Livre[] = [];
constructor(private livreService: LivreService, private router: Router) { }
ngOnInit(): void {
  this.loadLivres();
}
loadLivres(): void {
  this.livreService.getLivres().subscribe(data => {
    // Filter only available books
    this.Livres = data.filter(livre => livre.disponible);
  });
}
// Pass the selected book id to Emprunt component
goToEmprunt(livreId: string): void {
  this.router.navigate(['/Emprunte'], { queryParams: { livreId } });
}
}
