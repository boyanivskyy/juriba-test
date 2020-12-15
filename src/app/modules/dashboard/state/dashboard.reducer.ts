import { DashboardActions } from './dashboard.actions';
import { DashboardEntity } from '../../../models/dashboard.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { state } from '@angular/animations';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface DashboardState extends EntityState<DashboardEntity> {
    pending: boolean;
    error: any;
}

export interface DashboardPartialState {
    readonly [DASHBOARD_FEATURE_KEY]: DashboardState;
}

export const dashboardAdapter: EntityAdapter<DashboardEntity> = createEntityAdapter<DashboardEntity>();

const initialState: DashboardState = dashboardAdapter.getInitialState({
    // set initial required properties
    pending: false,
    error: null,
    totalResults: null,
    resultsPerPage: null,
});

const dashboardReducer = createReducer(
    initialState,
    on(DashboardActions.getData, (state) => ({
        ...state,
        pending: true,
    })),
    on(DashboardActions.getDataSuccess, (state, { items, totalResults, resultsPerPage }) => ({
        ...state,
        totalResults,
        resultsPerPage,
        pending: false,
    })),
    on(DashboardActions.getDataFailed, (state, { error }) => ({
        ...state,
        pending: false,
        error,
    }))
);

export function dashboardReducerFn(state: DashboardState | undefined, action: Action) {
    return dashboardReducer(state, action);
}
