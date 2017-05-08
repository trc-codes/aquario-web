import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { StateComponent } from './state.component';
import { SettingsComponent } from './settings.component';
import { AquarioDataService } from './aquario-data.service';

@NgModule({
  declarations: [ AppComponent,
    StateComponent,
    SettingsComponent
  ],
  imports: [ BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ AquarioDataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
