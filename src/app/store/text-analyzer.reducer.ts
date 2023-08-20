import { TextAnalyzer } from "../models/TextAnalyzer";
import * as Actions from './text-analyzer.actions';

export interface TextAnalyzerState {
    textAnalyzers: TextAnalyzer[];
    errorMessage: string;
}

const initialState: TextAnalyzerState = {
    textAnalyzers: [],
    errorMessage: ''
}

export function textAnalysisReducer(state : TextAnalyzerState = initialState, action: Actions.TextAnalyzerActions): TextAnalyzerState {
    switch(action.type){
        case Actions.ADD_RESULT:
            return {
                ...state,
                textAnalyzers: [action.payload, ...state.textAnalyzers]
            }
        case Actions.TEXT_ANALYSIS_FAIL:
            return {
                ...state,
                errorMessage: action.payload
            }

            default:
                return state;
    }

}

