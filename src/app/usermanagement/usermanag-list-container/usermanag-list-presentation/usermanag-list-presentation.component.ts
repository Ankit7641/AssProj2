import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Usermanagement } from '../../usermanagement.model';
import { UsermanagListPresenterService } from '../usermanag-list-presenter/usermanag-list-presenter.service';
import { Overlay, OverlayRef } from "@angular/cdk/overlay";
import { ComponentPortal, TemplatePortalDirective } from "@angular/cdk/portal";
import { UsermanagFormContainerComponent } from '../../usermanag-form-container/usermanag-form-container.component';


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

  //overlay
  overlayRef!: OverlayRef;
  @ViewChild('overlayTemplate') overlayTemplate!: TemplatePortalDirective;
  

 
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
    private overlay: Overlay,
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
    this.reverse = !this.reverse;
    this.key = key;
    this.orderType = this.userservice.order(this.orderType);
    this.sort.emit({ key: this.key, order: this.orderType });
  }

  //overlay
  displayOverlay() {
    debugger
    const target = document.querySelector("#btn") as HTMLElement;
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      backdropClass: "cdk-overlay-transparent-backdrop",
      panelClass: "mat-elevation-z8",
      positionStrategy: this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: "start",
            originY: "top",
            overlayX: "start",
            overlayY: "top"
          }
        ])
    });
    const component = new ComponentPortal(UsermanagFormContainerComponent);
    const componentRef = overlayRef.attach(component);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }

    
}
