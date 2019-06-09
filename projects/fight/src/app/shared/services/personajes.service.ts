import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personajes } from '../model/personajes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {
  private url = '../../../assets/mocks/allPersonajes.json';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<Personajes[]> {
    return this.http.get<Personajes[]>(this.url);
  }
}
