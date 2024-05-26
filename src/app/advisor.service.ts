import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advisor } from './advisor.model';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class AdvisorService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAdvisors(): Observable<Advisor[]> {
    return this.http.get<Advisor[]>(this.apiUrl);
  }

  getAdvisor(id: string): Observable<Advisor> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Advisor>(url);
  }

  createAdvisor(advisor: Advisor): Observable<Advisor> {
    return this.http.post<Advisor>(this.apiUrl, advisor);
  }

  updateAdvisor(advisor: Advisor): Observable<Advisor> {
    const url = `${this.apiUrl}/${advisor.id}`;
    return this.http.put<Advisor>(url, advisor);
  }

  deleteAdvisor(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
