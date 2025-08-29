export interface StudentInfo {
  fullName : string
  department: string;
  year: string;
  residence: string;
}

export interface ProblemValidation {
  foodFrequency: string;
  difficulties: string;
  struggles: string[];
}

export interface SolutionValidation {
  wouldUse: string;
  preferredOption: string;
  extraPayment: string;
}

export interface UsageBehavior {
  buyingTime: string[];
  orderType: string[];
  paymentMethod: string;
}

export interface Feedback {
  mostUsefulFeature: string;
  concerns: string;
}

export interface SurveyData extends StudentInfo, ProblemValidation, SolutionValidation, UsageBehavior, Feedback {}

export interface SurveyStep {
  id: number;
  title: string;
  completed: boolean;
}