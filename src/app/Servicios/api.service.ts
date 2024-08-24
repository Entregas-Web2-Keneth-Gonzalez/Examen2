import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import Character from '../Models/Character';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>("https://last-airbender-api.fly.dev/api/v1/characters")
  }

  getOneCharacter(id:string): Observable<Character> {
    return this.http.get<Character>(`https://last-airbender-api.fly.dev/api/v1/characters/${id}`);
  }
}
