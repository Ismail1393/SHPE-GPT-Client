import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShpeGPTService {
  private readonly API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  public sendMessage(text: any): Observable<any> {
    return this.http.post(`${this.API_URL}/chat`, { message: text });
  }
}
