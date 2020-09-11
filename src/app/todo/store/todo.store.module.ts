import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from '../../app.component';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './todo.reducer';
import { todoFeatureKey } from '../../todo/store/todo.reducer';
import { TodoEffects } from './todo.effect';

@NgModule({
  imports: [
    StoreModule.forFeature(todoFeatureKey, reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class TodoStoreModule {}
