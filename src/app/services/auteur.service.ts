import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auteur } from '../models/auteur';

@Injectable({
  providedIn: 'root'
})
export class AuteurService {
  private apiUrl = 'http://localhost:3000/auteurs';

  constructor(private http: HttpClient) { }

  getAuteurs(): Observable<Auteur[]> {
    return this.http.get<Auteur[]>(this.apiUrl);
  }

  getAuteur(id: number): Observable<Auteur> {
    return this.http.get<Auteur>(`${this.apiUrl}/${id}`);
  }

  addAuteur(Auteur: Auteur): Observable<Auteur> {
    return this.http.post<Auteur>(this.apiUrl, Auteur);
  }

  updateAuteur(Auteur: Auteur): Observable<Auteur> {
    return this.http.put<Auteur>(`${this.apiUrl}/${Auteur.id}`, Auteur);
  }

  deleteAuteur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
