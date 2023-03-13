import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'css-flexbox', pathMatch: 'full'},
  {path: 'css-flexbox',
  loadChildren: () => import('./features/css-flexbox/css-flexbox.module').then(m => m.CssFlexboxModule)
},
  {path: 'flex-item',
  loadChildren: () => import ('./features/flex-item/flex-item.module').then(m => m.FlexItemModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
