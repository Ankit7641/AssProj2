import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsermanagementService } from '../../usermanagement.service';
import { UsermanagFormPresenterService } from '../usermanag-form-presenter/usermanag-form-presenter.service';

@Component({
  selector: 'app-usermanag-form-presentation',
  templateUrl: './usermanag-form-presentation.component.html',
  styleUrls: ['./usermanag-form-presentation.component.scss'],
  viewProviders: [UsermanagFormPresenterService]
})
export class UsermanagFormPresentationComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];

  submitted = false;

  @Output() userData: EventEmitter<any> = new EventEmitter();

  public userForm: FormGroup = this.userService.bindForm();

  constructor(
    private userService: UsermanagFormPresenterService,
    private resApi: UsermanagementService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {

// It call data from BankdetailFormPresenterService
    this.userService.userData$.subscribe((userData: any) => {
      debugger
      console.log(userData)
      this.userData.emit(userData)
    })

    if (this.id) {
      this.resApi.getuserdetails().subscribe((res: any) => {
        this.userForm.patchValue(res);
      });
    }


  }
  // Control for [fromgroup]
  get userFormControl() {
    return this.userForm.controls;
  }

  // Clicking on submit buttom Data will come from form
  public onSubmit() {
    console.log(this.userForm.value);
    debugger
    this.userService.bankdetail(this.userForm)
  }

}
