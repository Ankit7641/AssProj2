import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usermanagement } from './usermanagement.model';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementService {

  // Define API
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient,
    ) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Get List Of Bank Detail 
  public getuserdetails(): Observable<Usermanagement> {
    console.log(Usermanagement)
    return this.http.get<Usermanagement>(this.apiURL + '/user')
  }

  // Add Bank Detail
  public adduserdetail(bank: Usermanagement): Observable<Usermanagement> {
    return this.http.post<Usermanagement>(this.apiURL + '/user/', bank)

  }


  // Delete Bank Detail by ID
  public deleteuserdetail(id: number) {
    return this.http.delete<Usermanagement>(this.apiURL + '/user/' + id)

  }

  // Get Method to fetch Data
  getuser(id: string): Observable<Usermanagement> {
    return this.http.get<Usermanagement>(this.apiURL + '/user/' + id)
  }

  // Update Bank Detail
  updateuserdetail(id: string, bank: any): Observable<Usermanagement> {
    return this.http.put<Usermanagement>(this.apiURL + '/user/' + id, (bank))
  }
}