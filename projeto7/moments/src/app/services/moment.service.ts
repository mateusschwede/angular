import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moment';
import { environment } from 'src/environments/environment';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseApiUrl = environment.apiBaseUrl;
  private apiUrl = `${this.baseApiUrl}api/moments`;

  constructor(private http: HttpClient) {}

  getMoments(): Observable<Response<Moment[]>> {
    // Pegará dados da API Backend
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  createMoment(formData: FormData): Observable<FormData> {
    // Enviará dados para API Backend
    return this.http.post<FormData>(this.apiUrl, formData);
  }
}