import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { TextAnalyzer } from '../models/TextAnalyzer';
import * as TextAnalyzerActions from './text-analyzer.actions';

@Injectable()
export class TestAnalyzerEffects {
  constructor(private actions$: Actions, private http: HttpClient) {}

  textAnalysis$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TextAnalyzerActions.TEXT_ANALYSIS_REQUEST_START),
      switchMap((data: TextAnalyzerActions.TextAnalysisRequestStart) => {
        return this.http.post<TextAnalyzer>(
          'http://localhost:8080',
          data.payload
        ).pipe(
            map((response: TextAnalyzer) => {
                return new TextAnalyzerActions.AddResult({ inputText: data.payload.inputText, option: data.payload.option, mode: data.payload.mode, result: response.result})
            })
        )
      })
    )
  );
}
