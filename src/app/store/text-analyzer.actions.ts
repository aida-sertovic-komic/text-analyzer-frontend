import { Action } from '@ngrx/store';
import { TextAnalyzer } from '../models/TextAnalyzer';

export const ADD_RESULT = 'ADD_RESULT';

export class AddResult implements Action {
  readonly type = ADD_RESULT;
  constructor(public payload: TextAnalyzer){}
}

export type TextAnalyzerActions = AddResult;