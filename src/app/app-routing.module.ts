import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StateComponent } from './state.component';
import { SettingsComponent } from './settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/state', pathMatch: 'full' },
  { path: 'state',  component: StateComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
