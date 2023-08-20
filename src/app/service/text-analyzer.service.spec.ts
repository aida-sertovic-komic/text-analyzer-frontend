import { TestBed } from '@angular/core/testing';
import { AnalysisOptionEnum } from '../models/AnalysisOptionEnum';
import { TextAnalyzer } from '../models/TextAnalyzer';
import { TextAnalyzerService } from './text-analyzer.service';

describe('TextAnalyzerService', () => {
  let service: TextAnalyzerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextAnalyzerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return vowels', () => {
    const input: TextAnalyzer = {
      inputText: 'It should return only vowels!',
      option: AnalysisOptionEnum.VOWELS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({
      u: 2,
      e: 2,
      i: 1,
      o: 3,
    });
  });

  it('should return consonants', () => {
    const input: TextAnalyzer = {
      inputText: 'It should return only consonants!',
      option: AnalysisOptionEnum.CONSONANTS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({
      t: 3,
      s: 3,
      h: 1,
      l: 2,
      d: 1,
      r: 2,
      n: 5,
      y: 1,
      c: 1,
    });
  });

  it('should return vowels and consonants', () => {
    const input: TextAnalyzer = {
      inputText: 'It should return vowels and consonants!',
      option: AnalysisOptionEnum.BOTH,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({
      u: 2,
      e: 2,
      i: 1,
      a: 2,
      o: 4,
      t: 3,
      s: 4,
      h: 1,
      l: 2,
      d: 2,
      r: 2,
      n: 5,
      c: 1,
      v: 1,
      w: 1,
    });
  });

  it('should return empty result given undefined input text and vowels option', () => {
    const input: TextAnalyzer = {
      inputText: undefined,
      option: AnalysisOptionEnum.VOWELS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given undefined input text and consonants option', () => {
    const input: TextAnalyzer = {
      inputText: undefined,
      option: AnalysisOptionEnum.CONSONANTS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given undefined input text and both option', () => {
    const input: TextAnalyzer = {
      inputText: undefined,
      option: AnalysisOptionEnum.BOTH,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given empty input text and vowels option', () => {
    const input: TextAnalyzer = {
      inputText: '',
      option: AnalysisOptionEnum.VOWELS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given empty input text and consonants option', () => {
    const input: TextAnalyzer = {
      inputText: '',
      option: AnalysisOptionEnum.CONSONANTS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given empty input text and both option', () => {
    const input: TextAnalyzer = {
      inputText: '',
      option: AnalysisOptionEnum.BOTH,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given only consonants and option vowels', () => {
    const input: TextAnalyzer = {
      inputText: 'RZTVHDFGWQ',
      option: AnalysisOptionEnum.VOWELS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given only vowels and option consonants', () => {
    const input: TextAnalyzer = {
      inputText: 'AEIOU',
      option: AnalysisOptionEnum.CONSONANTS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given non letters and option vowels', () => {
    const input: TextAnalyzer = {
      inputText: '12345678!/()=?!',
      option: AnalysisOptionEnum.VOWELS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given non letters and option consonants', () => {
    const input: TextAnalyzer = {
      inputText: '12345678!/()=?!',
      option: AnalysisOptionEnum.CONSONANTS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given non letters and option both', () => {
    const input: TextAnalyzer = {
      inputText: '12345678!/()=?!',
      option: AnalysisOptionEnum.BOTH,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given only whitespaces and option vowels', () => {
    const input: TextAnalyzer = {
      inputText: '   ',
      option: AnalysisOptionEnum.VOWELS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given only whitespaces and option consonants', () => {
    const input: TextAnalyzer = {
      inputText: '   ',
      option: AnalysisOptionEnum.CONSONANTS,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });

  it('should return empty result given only whitespaces and option both', () => {
    const input: TextAnalyzer = {
      inputText: '   ',
      option: AnalysisOptionEnum.BOTH,
    };

    const analysisResult: TextAnalyzer = service.analyzeText(input);

    expect(analysisResult.result).toEqual({});
  });
});
