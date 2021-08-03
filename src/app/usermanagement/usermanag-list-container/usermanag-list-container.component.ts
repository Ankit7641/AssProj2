import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UsermanagementService } from '../usermanagement.service';
import { UsermanagListPresenterService } from './usermanag-list-presenter/usermanag-list-presenter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usermanag-list-container',
  templateUrl: './usermanag-list-container.component.html',
  styleUrls: ['./usermanag-list-container.component.scss']
})
export class UsermanagListContainerComponent implements OnInit {

  public usermanglist$: Observable<any> = of();

  //sort
  public orderAs!: string;
  public fieldName!: string;
  

  

  constructor(
    private userservice: UsermanagementService,
    private location: Location
  ) {
    this.usermanglist$ = this.userservice.getuserdetails();
  }

  ngOnInit(): void {
  }
  // DAta will be deleted
  public onDeleteId(id: number) {
    this.usermanglist$=this.userservice.deleteuserdetail(id)
    //this.location.back();
  }
  private getUsers(): void {
    debugger
    this.usermanglist$ = this.userservice.getUsersAll( this.fieldName, this.orderAs);
  }
  
  public sort(value:any): void {
    debugger
    this.fieldName = value.key;
    this.orderAs = value.order;
    this.getUsers();
  }
}
