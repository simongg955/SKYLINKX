import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class componentesService {

  private readonly URL = 'http://localhost:3015/api' // Environment
  constructor(private http: HttpClient) { }

  getAllComponentes$():Observable<any> {
    return this.http.get(`${this.URL}/componentes`)
    .pipe(
      map(({data}: any) => {
        return data
      })
    )
  }
}
