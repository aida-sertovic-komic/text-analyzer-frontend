import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AnalysisModeEnum } from './models/AnalysisModeEnum';
import { AnalysisOptionEnum } from './models/AnalysisOptionEnum';
import { TextAnalyzer } from './models/TextAnalyzer';
import { TextAnalyzerService } from './service/text-analyzer.service';
import * as fromActions from './store/text-analyzer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  textAnalyzers!: Observable<{ textAnalyzers: TextAnalyzer[]}>;
  private subscription!: Subscription;

  analysisForm: FormGroup = new FormGroup({
    inputText: new FormControl('', Validators.required),
    mode: new FormControl(AnalysisModeEnum.ONLINE, Validators.required),
    option: new FormControl(AnalysisOptionEnum.VOWELS, Validators.required)
  });


  constructor(private textAnalyzerService: TextAnalyzerService, private store: Store<{ textAnalyzer: { textAnalyzers: TextAnalyzer[]}}>){
  }

  ngOnInit(): void {
    this.textAnalyzers = this.store.select('textAnalyzer');
  }

  public analyzeText(){
  const input: TextAnalyzer = this.analysisForm.value;
   if(this.analysisForm.get('mode')?.value === AnalysisModeEnum.OFFLINE){
     const result = this.textAnalyzerService.analyzeText(input);
     this.store.dispatch(new fromActions.AddResult({ ...input, ...result}));
   }
   else  {
    this.store.dispatch(new fromActions.TextAnalysisRequestStart(input))
   }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
