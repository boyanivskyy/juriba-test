import { DashboardActions } from './dashboard.actions';
import { DashboardEntity } from '../../../models/dashboard.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

export const DASHBOARD_FEATURE_KEY = 'dashboard';

export interface DashboardState extends EntityState<DashboardEntity> {
    pending: boolean;
    error: string;
    totalResults: number;
    resultsPerPage: number;
    rowForSelection: boolean;
    selectedRawId: string;
    selectAllRows: boolean;
}

export interface DashboardPartialState {
    readonly [DASHBOARD_FEATURE_KEY]: DashboardState;
}

export const dashboardAdapter: EntityAdapter<DashboardEntity> = createEntityAdapter<DashboardEntity>();

const initialState: DashboardState = dashboardAdapter.getInitialState({
    // set initial required properties
    pending: false,
    error: '',
    totalResults: 0,
    resultsPerPage: 0,
    rowForSelection: false,
    selectedRawId: '',
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
        selectRawId: id,
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
): DashboardState {
    return dashboardReducer(state, action);
}
