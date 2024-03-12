import { useState } from "react";

function MultistepForm(steps = []) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function nextStep() {
    setCurrentStepIndex((currentIndex) => {
      const nextIndex = currentIndex + 1;
      return nextIndex < steps.length ? nextIndex : currentIndex;
    });
  }

  function previousStep() {
    setCurrentStepIndex((currentIndex) => {
      const previousIndex = currentIndex - 1;
      return previousIndex >= 0 ? previousIndex : currentIndex;
    });
  }

  function goToStep(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    goToStep,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    nextStep,
    previousStep,
    totalSteps: steps.length,
  };
}

export default MultistepForm;
