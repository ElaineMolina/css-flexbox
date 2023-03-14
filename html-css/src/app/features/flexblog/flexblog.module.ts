import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexblogRoutingModule } from './flexblog-routing.module';
import { FlexblogComponent } from './components/flexblog/flexblog.component';
import { PageFlexblogComponent } from './pages/page-flexblog/page-flexblog.component';


@NgModule({
  declarations: [
    FlexblogComponent,
    PageFlexblogComponent
  ],
  imports: [
    CommonModule,
    FlexblogRoutingModule
  ]
})
export class FlexblogModule { }
