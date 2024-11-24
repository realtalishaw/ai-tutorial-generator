import { create } from 'zustand';

export type TutorialStep = {
  id: number;
  title: string;
  explanation: string;
  codeBlock?: {
    code: string;
    language: string;
  };
  userPrompt?: string;
  troubleshooting?: string[];
};

export type Tutorial = {
  id: number;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  language: string;
  duration: string;
  steps: TutorialStep[];
  currentStep: number;
};

type TutorialStore = {
  tutorials: Tutorial[];
  isGenerating: boolean;
  addTutorial: (tutorial: Tutorial) => void;
  setGenerating: (status: boolean) => void;
  setCurrentStep: (tutorialId: number, stepIndex: number) => void;
};

export const useTutorialStore = create<TutorialStore>((set) => ({
  tutorials: [],
  isGenerating: false,
  addTutorial: (tutorial) => set((state) => ({ 
    tutorials: [tutorial, ...state.tutorials] 
  })),
  setGenerating: (status) => set({ isGenerating: status }),
  setCurrentStep: (tutorialId, stepIndex) => set((state) => ({
    tutorials: state.tutorials.map(tutorial =>
      tutorial.id === tutorialId
        ? { ...tutorial, currentStep: stepIndex }
        : tutorial
    )
  })),
}));