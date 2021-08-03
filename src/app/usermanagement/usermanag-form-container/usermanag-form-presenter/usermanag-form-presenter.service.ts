import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { UsermanagementModule } from '../../usermanagement.module';

@Injectable({
  providedIn: 'root'
})
export class UsermanagFormPresenterService {

  public userData: Subject<any> = new Subject();
  public userData$: Observable<any>;

  constructor(private fb: FormBuilder) {
    this.userData$ = this.userData.asObservable();
  }
  public bindForm() {
    // Value wiil be bind from fromdata
    return this.fb.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      clientname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      office: new FormControl('', [Validators.required]),
      contactno: new FormControl('', [Validators.required,Validators.minLength(12), Validators.maxLength(12)]),
     

    });
  }

  public bindControlValue(userform: FormGroup, user: UsermanagementModule): FormGroup {
    debugger
    if (user) {
      debugger
      userform.patchValue(user);
    }
    return userform;
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