import React from 'react';
import { TutorialStep as StepType } from '../store/tutorialStore';
import CodeBlock from './CodeBlock';
import { AlertCircle } from 'lucide-react';

type TutorialStepProps = {
  step: StepType;
  isActive: boolean;
};

export default function TutorialStep({ step, isActive }: TutorialStepProps) {
  if (!isActive) return null;

  return (
    <div className="space-y-6 animate-fadeIn">
      <section>
        <h3 className="text-xl font-bold text-gray-100 mb-4">{step.title}</h3>
        <p className="text-gray-300 leading-relaxed">{step.explanation}</p>
      </section>

      {step.codeBlock && (
        <section>
          <h4 className="text-lg font-semibold text-gray-200 mb-3">Example Code</h4>
          <CodeBlock
            code={step.codeBlock.code}
            language={step.codeBlock.language}
          />
        </section>
      )}

      {step.userPrompt && (
        <section className="bg-dark-300/50 border border-dark-400 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-gray-200 mb-2">Your Turn</h4>
          <p className="text-gray-300">{step.userPrompt}</p>
        </section>
      )}

      {step.troubleshooting && step.troubleshooting.length > 0 && (
        <section className="bg-dark-300/50 border border-dark-400 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle className="w-5 h-5 text-accent-400" />
            <h4 className="text-lg font-semibold text-gray-200">Troubleshooting</h4>
          </div>
          <ul className="list-disc list-inside space-y-2">
            {step.troubleshooting.map((tip, index) => (
              <li key={index} className="text-gray-300">{tip}</li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}