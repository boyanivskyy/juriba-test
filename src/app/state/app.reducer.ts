import { Action, createReducer } from '@ngrx/store';
export const appReducer = createReducer({});

export const APP_FEATURE_KEY = 'users';

export function appReducerFn(state: undefined, action: Action): {} {
    return appReducer(state, action);
}
