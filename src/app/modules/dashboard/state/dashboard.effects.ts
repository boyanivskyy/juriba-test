import { DashboardActions } from './dashboard.actions';
import { ApiService } from '../../../services/api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { DashboardPartialState } from './dashboard.reducer';

@Injectable()
export class DashboardEffects {
    getData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(DashboardActions.getData),
            switchMap(() =>
                this.apiService.getData().pipe(
                    map((result) => {
                        return DashboardActions.getDataSuccess({
                            items: result.items,
                            totalResults: result.pageInfo.totalResults,
                            resultsPerPage: result.pageInfo.resultsPerPage,
                        });
                    }),
                    catchError((errors) => of(DashboardActions.getDataFailed(errors)))
                )
            )
        )
    );

    getDataSuccess$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(DashboardActions.getDataSuccess),
                tap((items) => {
                    // Some code to show success message
                })
            ),
        { dispatch: false }
    );

    getDataFailed$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(DashboardActions.getDataFailed),
                tap((error) => {
                    // Handle error code here
                })
            ),
        { dispatch: false }
    );

    constructor(
        private actions$: Actions,
        private apiService: ApiService,
        private store$: Store<DashboardPartialState>
    ) {}
}
