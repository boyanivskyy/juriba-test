import { createAction, props } from '@ngrx/store';
import { DashboardEntity } from 'src/app/models/dashboard.model';

export const getData = createAction('[Dashboard] Get Data');

export const getDataSuccess = createAction(
    '[Dashboard] Get Data Success',
    props<{ items: DashboardEntity[]; totalResults: number; resultsPerPage: number }>()
);

export const getDataFailed = createAction('[Dashboard] Get Data Failed', props<{ error: any }>());

export const selectRow = createAction(
    '[Dashboard] Select row',
    props<{ id: number; value: boolean }>()
);

export const selectAllRows = createAction(
    '[Dashboard] Select all rows',
    props<{ selectAllRows: boolean }>()
);

export const DashboardActions = {
    getData,
    getDataSuccess,
    getDataFailed,
    selectRow,
    selectAllRows,
};
