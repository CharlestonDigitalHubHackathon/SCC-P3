import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(payload: any): Observable<any> {
    return this.http.post('https://efarmony.herokuapp.com/api/login', payload)
  }
}
