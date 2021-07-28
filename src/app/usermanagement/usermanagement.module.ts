import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsermanagementRoutingModule } from './usermanagement-routing.module';
import { UsermanagementComponent } from './usermanagement.component';
import { UsermanagListContainerComponent } from './usermanag-list-container/usermanag-list-container.component';
import { UsermanagListPresentationComponent } from './usermanag-list-container/usermanag-list-presentation/usermanag-list-presentation.component';
import { UsermanagFormContainerComponent } from './usermanag-form-container/usermanag-form-container.component';
import { UsermanagFormPresentationComponent } from './usermanag-form-container/usermanag-form-presentation/usermanag-form-presentation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsermanagementService } from './usermanagement.service';
import { FilterPipe } from './usermanag-list-container/usermanag-list-presentation/filter.pipe';
import { PhoneMaskDirective } from './usermanag-form-container/usermanag-form-presentation/phone-mask.directive';



@NgModule({
  declarations: [
    UsermanagementComponent,
    UsermanagListContainerComponent,
    UsermanagListPresentationComponent,
    UsermanagFormContainerComponent,
    UsermanagFormPresentationComponent,
    FilterPipe,
    PhoneMaskDirective
  
  ],
  imports: [
    CommonModule,
    UsermanagementRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UsermanagementService
  ]
})
export class UsermanagementModule { }
