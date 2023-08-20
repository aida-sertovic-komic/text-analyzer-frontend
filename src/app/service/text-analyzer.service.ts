import { Injectable } from '@angular/core';
import { AnalysisOptionEnum } from '../models/AnalysisOptionEnum';
import { TextAnalyzer } from '../models/TextAnalyzer';

@Injectable({
  providedIn: 'root',
})
export class TextAnalyzerService {
  analyzeText(input: TextAnalyzer): TextAnalyzer {
    const analyzed: TextAnalyzer = {
      result: {},
    };

    if (!input.inputText) {
      return analyzed;
    }
    
    let text: string = input.inputText
      ?.toLocaleLowerCase()
      .replace(/[^a-z]/g, '');

    if (input.option === AnalysisOptionEnum.VOWELS) {
      text = text.replace(/[^aeiou]/g, '');
    } else if (input.option === AnalysisOptionEnum.CONSONANTS) {
      text = text.replace(/[aeiou]/g, '');
    }

    if (analyzed.result) {
      for (const c of text) {
        const existing = analyzed.result[c] ?? 0;
        analyzed.result[c] = existing + 1;
      }
    }

    return analyzed;
  }
}
