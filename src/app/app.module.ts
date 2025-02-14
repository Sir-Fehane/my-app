import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './all/users/users.component';
import { DataUserComponent } from './all/data-user/data-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DataUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
