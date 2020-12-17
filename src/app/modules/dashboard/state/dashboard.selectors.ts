import { DASHBOARD_FEATURE_KEY } from './dashboard.reducer';
import { DashboardPartialState, DashboardState, dashboardAdapter } from './dashboard.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getDashboardState = createFeatureSelector<DashboardPartialState, DashboardState>(
    DASHBOARD_FEATURE_KEY
);

const { selectAll, selectEntities, selectTotal } = dashboardAdapter.getSelectors();

const getPending = createSelector(getDashboardState, (state: DashboardState) => state.pending);

const getTotalElements = createSelector(
    getDashboardState,
    (state: DashboardState) => state.totalResults
);

export const getState = createSelector(getDashboardState, (state: DashboardState) =>
    selectAll(state)
);

const getAllEntities = createSelector(getDashboardState, (state: DashboardState) =>
    selectEntities(state)
);

const selectedRaw = createSelector(getDashboardState, (state: DashboardState) => ({
    rowForSelection: state.rowForSelection,
    selectedRawId: state.selectedRawId,
}));

const selectAllRaws = createSelector(
    getDashboardState,
    (state: DashboardState) => state.selectAllRows
);

export const dashboardQuery = {
    getPending,
    getState,
    getAllEntities,
    selectedRaw,
    selectAllRaws,
};
