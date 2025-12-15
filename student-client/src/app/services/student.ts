import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:5289/api';

  constructor(private http: HttpClient) { }

  register(user: any) {
    return this.http.post(`${this.apiUrl}/auth/register`, user);
  }

  login(user: any) {
    return this.http.post<any>(`${this.apiUrl}/auth/login`, user);
  }

  private getAuthHeaders() {
    const token = (typeof localStorage !== 'undefined') ? localStorage.getItem('token') : '';
    return {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/students`, this.getAuthHeaders());
  }

  addStudent(student: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/students`, student, this.getAuthHeaders());
  }

  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/students/${id}`, student, this.getAuthHeaders());
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/students/${id}`, this.getAuthHeaders());
  }
}