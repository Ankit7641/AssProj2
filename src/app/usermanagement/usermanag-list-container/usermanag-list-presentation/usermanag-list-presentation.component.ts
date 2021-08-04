import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Usermanagement } from '../../usermanagement.model';
import { UsermanagListPresenterService } from '../usermanag-list-presenter/usermanag-list-presenter.service';

@Component({
  selector: 'app-usermanag-list-presentation',
  templateUrl: './usermanag-list-presentation.component.html',
  styleUrls: ['./usermanag-list-presentation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [UsermanagListPresenterService]
})
export class UsermanagListPresentationComponent implements OnInit {

  //records!: Array<any>;
  records = this.usermanglist=[];
  isDesc: boolean = false;
  column: string = 'firstname';

  searchText!: string;
  searchClient!: string;
  
  public page = 1;
  public pageSize = 3;

  //sort
  public  reverse!: boolean;
  public orderType!: string;
  public key!: string;

 
  @Input() public set usermanglist( id: Usermanagement[]) {
    if (id) {
      this._usermanglist = id
    }
  }

  public get usermanglist(): Usermanagement[] {
    return this._usermanglist
  }

  //sort
  @Output() public sort: EventEmitter<any>=new EventEmitter();

  @Output() public deleteId: EventEmitter<any> = new EventEmitter();

  private _usermanglist: Usermanagement[] = [];
  public bankGroup: FormGroup;

  constructor(
    private userservice: UsermanagListPresenterService
  ) {
    this.usermanglist = [];
    this.bankGroup = this.userservice.bindForm();
  }

  ngOnInit(): void {
    this.userservice.userId$.subscribe((userId) => {
      this.deleteId.emit(userId);
    });


  }

  public deleteuserdetail(id: number) {
    this.userservice.deleteuserdetail(id)
  }
//sort
  public sortData(key: string): void {
    debugger
    this.reverse = !this.reverse;
    this.key = key;
    this.orderType = this.userservice.order(this.orderType);
    this.sort.emit({ key: this.key, order: this.orderType });
  }

    
}
