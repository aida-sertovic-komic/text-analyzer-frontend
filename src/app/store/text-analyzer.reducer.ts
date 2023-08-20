import { defaultUrlMatcher } from "@angular/router";
import { TextAnalyzer } from "../models/TextAnalyzer";
import * as Actions from './text-analyzer.actions';

export interface TextAnalyzerState {
    textAnalyzers: TextAnalyzer[];
}

const initialState: TextAnalyzerState = {
    textAnalyzers: []
}

export function textAnalysisReducer(state : TextAnalyzerState = initialState, action: Actions.TextAnalyzerActions): TextAnalyzerState {
    switch(action.type){
        case Actions.ADD_RESULT:
            return {
                ...state,
                textAnalyzers: [action.payload, ...state.textAnalyzers]
            }

            default:
                return state;
    }

}

