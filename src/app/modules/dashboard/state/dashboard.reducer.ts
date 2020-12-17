import { DashboardState } from './../../../state/dashboard.reducer';
import { DashboardActions, selectRow, selectAllRows } from './dashboard.actions';
import { DashboardEntity } from '../../../models/dashboard.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { state } from '@angular/animations';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface DashboardState extends EntityState<DashboardEntity> {
    pending: boolean;
    error: any;
    totalResults: number;
    resultsPerPage: number;
    rowForSelection: number;
    selectedRawId: any;
    selectAllRows: boolean;
}

export interface DashboardPartialState {
    readonly [DASHBOARD_FEATURE_KEY]: DashboardState;
}

export const dashboardAdapter: EntityAdapter<DashboardEntity> = createEntityAdapter<DashboardEntity>();

const initialState: DashboardState = dashboardAdapter.getInitialState({
    // set initial required properties
    pending: false,
    error: null,
    totalResults: 0,
    resultsPerPage: 0,
    rowForSelection: null,
    selectedRawId: null,
    selectAllRows: false,
});

const dashboardReducer = createReducer(
    initialState,
    on(DashboardActions.getData, (state) => ({
        ...state,
        pending: true,
    })),
    on(DashboardActions.getDataSuccess, (state, { items, totalResults, resultsPerPage }) =>
        dashboardAdapter.setAll(items, {
            ...state,
            totalResults,
            resultsPerPage,
            pending: false,
        })
    ),
    on(DashboardActions.getDataFailed, (state, { error }) => ({
        ...state,
        pending: false,
        error,
    })),
    on(DashboardActions.selectRow, (state, { id, value }) => ({
        ...state,
        rowForSelection: value,
        selectedRawId: id,
    })),
    on(DashboardActions.selectAllRows, (state, { selectAllRows }) => ({
        ...state,
        selectAllRows,
    }))
);

export function dashboardReducerFn(
    state: DashboardState | undefined,
    action: Action
): () => DashboardState {
    return dashboardReducer(state, action);
}
