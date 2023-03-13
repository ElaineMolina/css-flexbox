import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFlexItemComponent } from './pages/page-flex-item/page-flex-item.component';

const routes: Routes = [
  {path: '', component: PageFlexItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexItemRoutingModule { }
