import { AnalysisModeEnum } from "./AnalysisModeEnum";
import { TextAnalyzerInput } from "./TextAnalyzerInput";

export interface TextAnalyzer {
    input: TextAnalyzerInput;
    analysisResult: {[key: string]: number};
    mode?: AnalysisModeEnum;
}