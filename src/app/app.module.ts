import { StoreModule } from '@ngrx/store';
import { employeReducer } from './ngrx/employe.reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [BrowserModule, StoreModule.forRoot({ employe: employeReducer })],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
