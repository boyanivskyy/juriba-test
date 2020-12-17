import { DashboardPartialState } from '../state/dashboard.reducer';
import { Injectable } from '@angular/core';
import { ActionsSubject, select, Store } from '@ngrx/store';
import { DashboardActions } from '../state/dashboard.actions';
import { dashboardQuery } from '../state/dashboard.selectors';
import { ofType } from '@ngrx/effects';

@Injectable()
export class DashboardFacade {
    pending$ = this.store.pipe(select(dashboardQuery.getPending));
    allItems$ = this.store.pipe(select(dashboardQuery.getState));
    rowForSelection$ = this.store.pipe(select(dashboardQuery.selectedRaw));
    selectAllRaws$ = this.store.pipe(select(dashboardQuery.selectAllRaws));

    successfullyFetchedData$ = this.actionsSubject.pipe(ofType(DashboardActions.getDataSuccess));

    constructor(
        private store: Store<DashboardPartialState>,
        private actionsSubject: ActionsSubject
    ) {}

    getData(): void {
        this.store.dispatch(DashboardActions.getData());
    }

    setRowForSelection(payload: any): void {
        this.store.dispatch(DashboardActions.selectRow(payload));
    }

    clearRowForSelection(): void {
        this.store.dispatch(DashboardActions.clearRowSelection());
    }

    setAllRowsSelection(payload: { selectAllRows: boolean }): void {
        this.store.dispatch(DashboardActions.selectAllRows(payload));
    }
}
