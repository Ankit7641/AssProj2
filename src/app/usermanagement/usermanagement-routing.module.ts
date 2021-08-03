import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsermanagFormContainerComponent } from './usermanag-form-container/usermanag-form-container.component';
import { UsermanagListContainerComponent } from './usermanag-list-container/usermanag-list-container.component';
import { UsermanagementComponent } from './usermanagement.component';

const routes: Routes = [
{
  path: '',
  component: UsermanagementComponent,
  children: [
    {
      path: '',
      component: UsermanagListContainerComponent
    },
    {
      path: 'add',
      component: UsermanagFormContainerComponent
    },
    {
      path: 'Edit/:id',
      component: UsermanagFormContainerComponent
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule { }
