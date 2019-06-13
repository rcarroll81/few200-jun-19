import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { tap } from 'rxjs/operators';


@Injectable()
export class CounterEffects {

  logItOut = createEffect(() =>
    this.actions$.pipe(
      tap(a => console.log(a.type))
    ),
    { dispatch: false }
  );
  constructor(private actions$: Actions) { }
}
