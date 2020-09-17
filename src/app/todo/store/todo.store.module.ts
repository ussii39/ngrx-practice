import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducer } from './todo.reducer';
import * as fromTodo from './';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TodoEffects } from './todo.effect';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    StoreModule.forFeature(fromTodo.todoFeatureKey, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
})
export class TodoStoreModule {}
