import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Tutorial } from '../store/tutorialStore';

type TutorialProgressProps = {
  tutorial: Tutorial;
  onStepChange: (stepIndex: number) => void;
};

export default function TutorialProgress({ tutorial, onStepChange }: TutorialProgressProps) {
  const totalSteps = tutorial.steps.length;
  const currentStep = tutorial.currentStep;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <button
          onClick={() => onStepChange(currentStep - 1)}
          disabled={currentStep === 0}
          className="p-2 text-gray-400 hover:text-accent-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex-1 px-4">
          <div className="h-2 bg-dark-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent-400 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
            />
          </div>
          <div className="mt-2 text-center text-sm text-gray-400">
            Step {currentStep + 1} of {totalSteps}
          </div>
        </div>

        <button
          onClick={() => onStepChange(currentStep + 1)}
          disabled={currentStep === totalSteps - 1}
          className="p-2 text-gray-400 hover:text-accent-400 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className="flex justify-center gap-2">
        {tutorial.steps.map((_, index) => (
          <button
            key={index}
            onClick={() => onStepChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentStep
                ? 'bg-accent-400 w-4'
                : 'bg-dark-300 hover:bg-dark-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}