import React, { useState } from 'react';
import { ArrowLeft, BookOpen, Clock, Code2, GraduationCap, MessageCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { useTutorialStore } from '../store/tutorialStore';
import TutorialStep from './TutorialStep';
import TutorialProgress from './TutorialProgress';
import Chat from './Chat';

export default function TutorialDetail() {
  const { id } = useParams();
  const { tutorials, setCurrentStep } = useTutorialStore();
  const tutorial = tutorials.find(t => t.id === Number(id));
  const [isChatOpen, setIsChatOpen] = useState(false);

  if (!tutorial) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-dark-200 text-gray-100">
        <h2 className="text-2xl font-bold mb-4">Tutorial not found</h2>
        <Link to="/" className="text-accent-400 hover:text-accent-500 flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  const handleStepChange = (stepIndex: number) => {
    setCurrentStep(tutorial.id, stepIndex);
  };

  return (
    <div className="min-h-screen bg-dark-200">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link to="/" className="text-accent-400 hover:text-accent-500 flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Tutorials
        </Link>

        <div className="bg-dark-100 rounded-xl p-6 shadow-xl mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-dark-300 rounded-lg">
              <Code2 className="w-6 h-6 text-accent-400" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-100 mb-2">{tutorial.title}</h1>
              <p className="text-gray-400">{tutorial.description}</p>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="flex items-center gap-2 bg-dark-300 p-3 rounded-lg">
              <GraduationCap className="w-5 h-5 text-accent-400" />
              <span className="text-gray-300">{tutorial.level}</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-300 p-3 rounded-lg">
              <BookOpen className="w-5 h-5 text-accent-400" />
              <span className="text-gray-300">{tutorial.language}</span>
            </div>
            <div className="flex items-center gap-2 bg-dark-300 p-3 rounded-lg">
              <Clock className="w-5 h-5 text-accent-400" />
              <span className="text-gray-300">{tutorial.duration}</span>
            </div>
            <button
              onClick={() => setIsChatOpen(!isChatOpen)}
              className="flex items-center gap-2 bg-dark-300 p-3 rounded-lg hover:bg-dark-400 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-accent-400" />
              <span className="text-gray-300">Get Help</span>
            </button>
          </div>

          <div className="mb-8">
            <TutorialProgress
              tutorial={tutorial}
              onStepChange={handleStepChange}
            />
          </div>

          <div className="prose prose-invert max-w-none">
            {tutorial.steps.map((step, index) => (
              <TutorialStep
                key={step.id}
                step={step}
                isActive={index === tutorial.currentStep}
              />
            ))}
          </div>
        </div>
      </div>

      {isChatOpen && (
        <Chat
          tutorial={tutorial}
          currentStep={tutorial.currentStep}
        />
      )}
    </div>
  );
}