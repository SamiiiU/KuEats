import React, { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion';
import WelcomeScreen from './sections/WelcomeScreen';
import StudentInfo from './sections/StudentInfo';
import ProblemValidation from './sections/ProblemValidation';
import SolutionValidation from './sections/SolutionValidation';
import UsageBehavior from './sections/UsageBehavior';
import Feedback from './sections/Feedback';
import SuccessScreen from './sections/SuccessScreen';
import ProgressBar from './sections/ProgressBar';
import GamifiedPopup from './sections/GamifiedPopup';
import { generateDiscountCode } from '../../utils/generateCode';
import { 
  SurveyData, 
  StudentInfo as StudentInfoType,
  ProblemValidation as ProblemValidationType,
  SolutionValidation as SolutionValidationType,
  UsageBehavior as UsageBehaviorType,
  Feedback as FeedbackType 
} from '../../types/survey';

const TOTAL_STEPS = 6;

const popupMessages = [
  {
    title: "Great Start!",
    message: "✅ You're 17% closer to your KuEats discount!",
    emoji: "🎯"
  },
  {
    title: "Halfway There!",
    message: "🔥 Keep going to unlock your discount!",
    emoji: "🔥"
  },
  {
    title: "Almost Done!",
    message: "🚀 Just two more steps to claim your reward!",
    emoji: "🚀"
  },
  {
    title: "So Close!",
    message: "🎯 You're one step away from your KuEats discount!",
    emoji: "⭐"
  },
  {
    title: "Final Step!",
    message: "🥳 Congratulations! You've unlocked your KuEats launch reward!",
    emoji: "🎉"
  }
];


const Survey = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [surveyData, setSurveyData] = useState<Partial<SurveyData>>({});
  const [showPopup, setShowPopup] = useState(false);
  const [discountCode] = useState(generateDiscountCode());

  const handleStepComplete = (stepData: any, stepIndex: number) => {
    setSurveyData(prev => ({ ...prev, ...stepData }));
    setCurrentStep(stepIndex + 1);
    
    if (stepIndex < TOTAL_STEPS - 1) {
      setShowPopup(true);
    }
  };

  const handleStart = () => {
    setCurrentStep(1);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeScreen onStart={handleStart} />;
      case 1:
        return (
          <StudentInfo 
            onSubmit={(data: StudentInfoType) => handleStepComplete(data, 1)} 
          />
        );
      case 2:
        return (
          <ProblemValidation 
            onSubmit={(data: ProblemValidationType) => handleStepComplete(data, 2)} 
          />
        );
      case 3:
        return (
          <SolutionValidation 
            onSubmit={(data: SolutionValidationType) => handleStepComplete(data, 3)} 
          />
        );
      case 4:
        return (
          <UsageBehavior 
            onSubmit={(data: UsageBehaviorType) => handleStepComplete(data, 4)} 
          />
        );
      case 5:
        return (
          <Feedback 
            onSubmit={(data: FeedbackType) => handleStepComplete(data, 5)} 
          />
        );
      case 6:
        return <SuccessScreen discountCode={discountCode} />;
      default:
        return <WelcomeScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="relative">
      {currentStep > 0 && currentStep < 6 && (
        <ProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderCurrentStep()}
        </motion.div>
      </AnimatePresence>

      <GamifiedPopup
        isVisible={showPopup}
        onClose={() => setShowPopup(false)}
        title={popupMessages[currentStep - 2]?.title || "Awesome!"}
        message={popupMessages[currentStep - 2]?.message || "Keep going!"}
        emoji={popupMessages[currentStep - 2]?.emoji || "🎉"}
      />
    </div>
  );
}

export default Survey
