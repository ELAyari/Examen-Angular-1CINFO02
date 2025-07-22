import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap } from 'rxjs';
import { Livre } from '../models/livre';

@Injectable({
  providedIn: 'root'
})
export class LivreService {
  private apiUrl = 'http://localhost:3000/livres';

  constructor(private http: HttpClient) { }

  getLivres(): Observable<Livre[]> {
    return this.http.get<Livre[]>(this.apiUrl);
  }

  getLivre(id: number): Observable<Livre> {
    return this.http.get<Livre>(`${this.apiUrl}/${id}`);
  }

  addLivre(Livre: Livre): Observable<Livre> {
    return this.http.post<Livre>(this.apiUrl, Livre);
  }

  updateLivre(Livre: Livre): Observable<Livre> {
    return this.http.put<Livre>(`${this.apiUrl}/${Livre.id}`, Livre);
  }

  // New method to update availability of a book
  updateLivreDisponibilite(id: string, disponible: boolean) {
    return this.getLivre(+id).pipe(
      switchMap((livre: Livre) => {
        livre.disponible = disponible;
        return this.updateLivre(livre);
      })
    );
  }

  deleteLivre(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
