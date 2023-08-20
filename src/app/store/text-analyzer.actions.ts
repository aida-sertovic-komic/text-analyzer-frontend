import { Action } from '@ngrx/store';
import { TextAnalyzer } from '../models/TextAnalyzer';

export const ADD_TEXT_ANALYSIS_RESULT = 'ADD_TEXT_ANALYSIS_RESULT';
export const TEXT_ANALYSIS_REQUEST_START = 'TEXT_ANALYSIS_REQUEST_START';
export const TEXT_ANALYSIS_FAIL = 'TEXT_ANALYSIS_FAIL';

export class AddTextAnalysisResult implements Action {
  readonly type = ADD_TEXT_ANALYSIS_RESULT;
  constructor(public payload: TextAnalyzer) {}
}

export class TextAnalysisRequestStart implements Action {
  readonly type = TEXT_ANALYSIS_REQUEST_START;
  constructor(public payload: TextAnalyzer) {}
}

export class TextAnalysisFail implements Action {
  readonly type = TEXT_ANALYSIS_FAIL;
  constructor(public payload: string) {}
}

export type TextAnalyzerActions =
  | AddTextAnalysisResult
  | TextAnalysisRequestStart
  | TextAnalysisFail;
