import { ActionReducerMap } from '@ngrx/store';
import {
  TextAnalyzerState,
  textAnalysisReducer,
} from './text-analyzer.reducer';

export const rootReducer = {};

export interface AppState {
  textAnalyzer: TextAnalyzerState;
}

export const reducers: ActionReducerMap<AppState, any> = {
  textAnalyzer: textAnalysisReducer,
};
