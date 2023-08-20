import { AnalysisModeEnum } from "./AnalysisModeEnum";
import { AnalysisOptionEnum } from "./AnalysisOptionEnum";

export interface TextAnalyzer {
    inputText?: string;
    option?: AnalysisOptionEnum;
    mode?: AnalysisModeEnum;
    result?: {[key: string]: number};
}