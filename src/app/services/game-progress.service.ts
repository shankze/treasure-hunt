import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameProgressService {
  constructor(private http: HttpClient) {}

  private endpointUrl = 'https://wwrp6w8t7b.execute-api.us-east-1.amazonaws.com/dev/game';

  getGameProgress(teamCode: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<any>(this.endpointUrl + '?teamCode=' + teamCode).pipe(
      tap((data) => console.log('response: ' + JSON.stringify(data))),
      catchError(this.handleError('updateProgress', []))
    );
  }

  updateProgress(questionProgress): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.endpointUrl, questionProgress, { headers }).pipe(
      tap((data) => console.log('response: ' + JSON.stringify(data))),
      catchError(this.handleError('updateProgress', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
