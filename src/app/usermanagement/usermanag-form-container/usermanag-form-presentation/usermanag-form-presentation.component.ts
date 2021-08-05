import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usermanagement } from '../../usermanagement.model';
import { UsermanagementService } from '../../usermanagement.service';
import { UsermanagFormPresenterService } from '../usermanag-form-presenter/usermanag-form-presenter.service';

@Component({
  selector: 'app-usermanag-form-presentation',
  templateUrl: './usermanag-form-presentation.component.html',
  styleUrls: ['./usermanag-form-presentation.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders: [UsermanagFormPresenterService]
})
export class UsermanagFormPresentationComponent implements OnInit {

  submitted = false;

  private _usermanglistbyId: Usermanagement[] = [];

  @Input() public set usermanglistbyId(id: Usermanagement[]) {
    if (id) {
      debugger
      this._usermanglistbyId = id
      this.userForm.patchValue(this.usermanglistbyId)
    }
  }

  public get usermanglistbyId(): Usermanagement[] {
    return this._usermanglistbyId
  }

  @Output() userData: EventEmitter<any> = new EventEmitter();

  public userForm: FormGroup = this.userService.bindForm();

  constructor(
    private userService: UsermanagFormPresenterService
  ) {
    this.usermanglistbyId = [];
  }

  ngOnInit(): void {

    // It call data from usermanagFormPresenterService
    this.userService.userData$.subscribe((userData: any) => {
      this.userData.emit(userData)
    })

  }
  // Control for [fromgroup]
  get userFormControl() {
    return this.userForm.controls;
  }

  // Clicking on submit buttom Data will come from form
  public onSubmit() {
    this.userService.userdetail(this.userForm)
  }

}
