import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usermanagement } from '../usermanagement.model';
import { UsermanagementService } from '../usermanagement.service';
import { Location } from '@angular/common';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-usermanag-form-container',
  templateUrl: './usermanag-form-container.component.html',
  styleUrls: ['./usermanag-form-container.component.scss']
})
export class UsermanagFormContainerComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  public usermanglistbyId$:Observable<any> = of();

  constructor(
    private restApi: UsermanagementService,
    private router: Router,
    private location: Location,
    public actRoute: ActivatedRoute
  ) {
    if(this.id){
      debugger
      this.usermanglistbyId$=this.restApi.getuser(this.id)
    }
  }

  ngOnInit(): void {
  }
  // Data will add to addbankdetailservice
  public adduserdetail(user: Usermanagement) {
    if(this.id){
      this.restApi.updateuserdetail(this.id,user).subscribe(()=>{
      })
    }
    else
    {
    debugger
    this.restApi.adduserdetail(user).subscribe((user: any) => {
      this.restApi.getuserdetails();
      this.location.back();
    })
    console.log(user);
  }

  }


}