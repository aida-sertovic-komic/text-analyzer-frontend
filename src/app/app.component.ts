import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AnalysisModeEnum } from './models/AnalysisModeEnum';
import { AnalysisOptionEnum } from './models/AnalysisOptionEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'text-analyzer-frontend';
  analysisForm = new FormGroup({
    inputText: new FormControl('', Validators.required),
    mode: new FormControl(AnalysisModeEnum.ONLINE, Validators.required),
    option: new FormControl(AnalysisOptionEnum.VOWELS, Validators.required)
  });

  public analyzeText(){
    console.log(this.analysisForm.value);
  }
}
