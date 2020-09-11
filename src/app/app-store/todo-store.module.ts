import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../in-memory-data.service';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { TodoModule } from '../todo/todo.module';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '.';
import { todoFeatureKey } from '../todo/store/todo.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(todoFeatureKey, reducers),
    EffectsModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class TodoStoreModule {}
