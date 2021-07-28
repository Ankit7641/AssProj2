import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usermanagement } from '../usermanagement.model';
import { UsermanagementService } from '../usermanagement.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usermanag-form-container',
  templateUrl: './usermanag-form-container.component.html',
  styleUrls: ['./usermanag-form-container.component.scss']
})
export class UsermanagFormContainerComponent implements OnInit {

  constructor(
    private restApi: UsermanagementService,
    private router: Router,
    private location: Location
  ) {
  }

  ngOnInit(): void {
  }
  // Data will add to addbankdetailservice
  public adduserdetail(user: Usermanagement) {

    debugger
    this.restApi.adduserdetail(user).subscribe((user: any) => {
      this.restApi.getuserdetails();
      this.location.back();
    })
    console.log(user);

  }


}