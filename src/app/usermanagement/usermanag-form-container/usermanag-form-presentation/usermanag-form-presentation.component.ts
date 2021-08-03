import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usermanagement } from '../../usermanagement.model';
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

  private _usermanglistbyId: Usermanagement[] = [];

  @Input() public set usermanglistbyId( id: Usermanagement[]) {
    if (id) {
      this._usermanglistbyId = id
    }
    debugger
    this.userForm.patchValue(this.usermanglistbyId)
  }

  public get usermanglistbyId(): Usermanagement[] {
    return this._usermanglistbyId
  }

  @Output() userData: EventEmitter<any> = new EventEmitter();

  public userForm: FormGroup = this.userService.bindForm();

  constructor(
    private userService: UsermanagFormPresenterService,
    private resApi: UsermanagementService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
    this.usermanglistbyId=[];
   }

  ngOnInit(): void {

// It call data from usermanagFormPresenterService
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
