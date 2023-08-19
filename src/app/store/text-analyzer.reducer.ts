import { createReducer, on, Action } from "@ngrx/store";
import { TextAnalyzer } from "../models/TextAnalyzer";
import * as Actions from './text-analyzer.actions';

export interface AppState {
    textAnalyzers: TextAnalyzer[];
}
const initialState: AppState = {
    textAnalyzers: []
}

export function textAnalysisReducer(state = initialState, action:Action) {
    switch(action.type){
        case 'TEXT_ANALYZE':
            return {
                ...state
            }
    }
}

