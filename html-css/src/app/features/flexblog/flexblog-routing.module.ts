import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageFlexblogComponent } from './pages/page-flexblog/page-flexblog.component';

const routes: Routes = [
  {path: '', component: PageFlexblogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlexblogRoutingModule { }
