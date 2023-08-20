import { Injectable } from '@angular/core';
import { AnalysisOptionEnum } from '../models/AnalysisOptionEnum';
import { TextAnalyzer } from '../models/TextAnalyzer';
import { TextAnalyzerInput } from '../models/TextAnalyzerInput';

@Injectable({
  providedIn: 'root',
})
export class TextAnalyzerService {

  analyzeText(input: TextAnalyzerInput): TextAnalyzer {
    const analyzed: TextAnalyzer = {
      input: {
        inputText: '',
        option: AnalysisOptionEnum.VOWELS
      },
      result: {},
    };

    let text: string = input.inputText?.toLocaleLowerCase().replace(/[^a-z]/g, '')!;

    if (input.option === AnalysisOptionEnum.VOWELS) {
      text = text.replace(/[^aeiou]/g, '');
    } else if (input.option === AnalysisOptionEnum.CONSONANTS) {
      text = text.replace(/[aeiou]/g, '');
    }

    for (const c of text) {
      const existing = analyzed.result[c] ?? 0;
      analyzed.result[c] = existing+1;
    }

    analyzed.input = input;
    return analyzed;
  }
}
