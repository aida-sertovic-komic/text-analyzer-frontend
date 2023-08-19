import { Action } from '@ngrx/store';

export const TEXT_ANALYZE = 'TEXT_ANALYZE';

export class TextAnalyzer implements Action {
  readonly type = TEXT_ANALYZE;
}
