import { ActionReducerMap } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';



import { RouterState } from './router/router.reduce';
import { configReducer, ConfigState } from './config/config.reduce';

export interface AppState {
  router: RouterReducerState<RouterState>,
  config: ConfigState,
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  config: configReducer,
};