import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexItemRoutingModule } from './flex-item-routing.module';
import { PageFlexItemComponent } from './pages/page-flex-item/page-flex-item.component';
import { FlexGrowComponent } from './components/flex-grow/flex-grow.component';
import { FlexBasisComponent } from './components/flex-basis/flex-basis.component';
import { FlexShrinkComponent } from './components/flex-shrink/flex-shrink.component';


@NgModule({
  declarations: [
    PageFlexItemComponent,
    FlexGrowComponent,
    FlexBasisComponent,
    FlexShrinkComponent
  ],
  imports: [
    CommonModule,
    FlexItemRoutingModule
  ]
})
export class FlexItemModule { }
