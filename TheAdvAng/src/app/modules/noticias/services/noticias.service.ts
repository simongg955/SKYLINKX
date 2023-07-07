import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class noticiasService {

  private readonly URL = 'http://localhost:3015/api' // Environment
  constructor(private http: HttpClient) { }

  getAllnoticiass$():Observable<any> {
    return this.http.get(`${this.URL}/noticias`)
    .pipe(
      map(({data}: any) => {
        return data
      })
    )
  }
}
