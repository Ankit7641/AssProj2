import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UsermanagementService } from '../../usermanagement.service';

@Injectable({
  providedIn: 'root'
})
export class UsermanagListPresenterService {
  
  public userId: Subject<any> = new Subject();
  public userId$!: Observable<any>;
  usermanagement: any = [];


  constructor(public restApi: UsermanagementService) {
    this.userId$ = this.userId.asObservable();
  }

  public bindForm() {
    return new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      clientname: new FormControl(),
      email: new FormControl(),
      office: new FormControl(),
      contactno: new FormControl()

    });
  }
  // Display data in List
  public loaduserdetail(id: string) {
    return this.restApi.getuserdetails().subscribe((data: any) => {
      this.usermanagement = data;
    })

  }


  // Delete user detail 
  public deleteuserdetail(id: number) {
    debugger
    console.log('delete', id);
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteuserdetail(id).subscribe(data => {
        //this.loaduserdetail()
      })
    }
  }

  // Sort
  public order(order: string): string {
    debugger
    if (order === 'asc') {
      return 'desc';
    } else {
      return 'asc';
    }
  }
}