import { PageCssFlexboxComponent } from './pages/page-css-flexbox/page-css-flexbox.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: PageCssFlexboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssFlexboxRoutingModule { }
