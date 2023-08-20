import { AnalysisModeEnum } from "./AnalysisModeEnum";
import { AnalysisOptionEnum } from "./AnalysisOptionEnum";

export interface TextAnalyzerInput {
    inputText?: string;
    option?: AnalysisOptionEnum;
    mode?: AnalysisModeEnum;
}