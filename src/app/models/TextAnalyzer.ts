import { AnalysisModeEnum } from "./AnalysisModeEnum";
import { TextAnalyzerInput } from "./TextAnalyzerInput";

export interface TextAnalyzer {
    input?: TextAnalyzerInput;
    mode?: AnalysisModeEnum;
    result: {[key: string]: number};
}