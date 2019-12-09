import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: any;
  httpOptions: any;

  constructor(private httpClient: HttpClient) {
    this.url = environment.url;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  getAllData(): Observable<any> {
    return this.httpClient.get<any>(this.url, this.httpOptions).pipe(
      tap((data) => { }, (error) => { catchError(this.handleError<any>(error)) }))
  }

  getAllDataById(id): Observable<any> {
    return this.httpClient.get<any>(this.url + '/' + id, this.httpOptions).pipe(
      tap((data) => { }, (error) => { catchError(this.handleError<any>(error)) }))
  }

  searchWord(text): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url).pipe(
      map(result =>
        result.filter(posts => posts.title.includes(text))
      )
    )
  }
}
