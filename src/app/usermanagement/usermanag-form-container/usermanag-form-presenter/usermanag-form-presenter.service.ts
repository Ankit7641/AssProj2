import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsermanagFormPresenterService {

  public userData: Subject<any> = new Subject();
  public userData$: Observable<any>;

  constructor() {
    this.userData$ = this.userData.asObservable();
  }
  public bindForm() {
    // Value wiil be bind from fromdata
    return new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      clientname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      office: new FormControl('', [Validators.required]),
      contactno: new FormControl('', [Validators.required,  Validators.pattern('[0-9]*')]),
     

    });
  }

  // Data will get
  public bankdetail(userForm: FormGroup) {
    if (userForm.valid) {
      debugger
      console.log('done');
      this.userData.next(userForm.value);
      console.log(this.bankdetail);
    } else {
    }
  }
}