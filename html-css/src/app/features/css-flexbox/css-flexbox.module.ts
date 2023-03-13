import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssFlexboxRoutingModule } from './css-flexbox-routing.module';
import { CssFlexboxComponent } from './components/css-flexbox/css-flexbox.component';
import { PageCssFlexboxComponent } from './pages/page-css-flexbox/page-css-flexbox.component';
import { DisplayComponent } from './components/display/display.component';
import { FlexDirectionComponent } from './components/flex-direction/flex-direction.component';
import { FlexWrapComponent } from './components/flex-wrap/flex-wrap.component';
import { FlexFlowComponent } from './components/flex-flow/flex-flow.component';
import { JustifyContentComponent } from './components/justify-content/justify-content.component';
import { AlignItemsComponent } from './components/align-items/align-items.component';
import { AlignContentComponent } from './components/align-content/align-content.component';


@NgModule({
  declarations: [
    CssFlexboxComponent,
    PageCssFlexboxComponent,
    DisplayComponent,
    FlexDirectionComponent,
    FlexWrapComponent,
    FlexFlowComponent,
    JustifyContentComponent,
    AlignItemsComponent,
    AlignContentComponent
  ],
  imports: [
    CommonModule,
    CssFlexboxRoutingModule
  ]
})
export class CssFlexboxModule { }
