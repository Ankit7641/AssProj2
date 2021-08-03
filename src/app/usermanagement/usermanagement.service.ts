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

  // Get List Of user Detail 
  public getuserdetails(): Observable<Usermanagement> {
    console.log(Usermanagement)
    return this.http.get<Usermanagement>(this.apiURL + '/user')
  }

  // Add user Detail
  public adduserdetail(bank: Usermanagement): Observable<Usermanagement> {
    return this.http.post<Usermanagement>(this.apiURL + '/user/', bank)

  }


  // Delete user Detail by ID
  public deleteuserdetail(id: number) {
    return this.http.delete<Usermanagement>(this.apiURL + '/user/' + id)

  }

  // Get Method to fetch Data
  getuser(id: string): Observable<Usermanagement> {
    return this.http.get<Usermanagement>(this.apiURL + '/user/' + id)
  }

  // Update user Detail
  updateuserdetail(id: string, bank: any): Observable<Usermanagement> {
    return this.http.put<Usermanagement>(this.apiURL + '/user/' + id, (bank))
  }


  //sort
  getUsersAll(key:string,order:string):Observable<any>{
    debugger
    return this.http.get<any>(`${this.apiURL+'/user/'}?q=&_sort=${key}&_order=${order}`)
  }
}