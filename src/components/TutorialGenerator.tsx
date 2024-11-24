import React, { useState } from 'react';
import { Wand2, Loader2 } from 'lucide-react';
import { useTutorialStore } from '../store/tutorialStore';

export default function TutorialGenerator() {
  const [topic, setTopic] = useState('');
  const [level, setLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('beginner');
  const { addTutorial, isGenerating, setGenerating } = useTutorialStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setGenerating(true);
    
    // Simulate AI generation
    setTimeout(() => {
      const newTutorial = {
        id: Date.now(),
        title: `${topic} for ${level}s`,
        description: `Learn ${topic} with a comprehensive tutorial tailored for ${level} developers.`,
        level,
        language: topic.toLowerCase().includes('python') ? 'Python' : 'C++',
        duration: '2 hours',
        currentStep: 0,
        steps: [
          {
            id: 1,
            title: 'Getting Started',
            explanation: `Let's begin our journey into ${topic}. We'll start with the fundamentals and gradually build up to more complex concepts.`,
            codeBlock: {
              code: `# First steps with ${topic}
print("Hello, learner!")`,
              language: 'python'
            },
            userPrompt: 'Try running this code and observe the output.',
            troubleshooting: [
              'Make sure Python is installed on your system',
              'Check that your development environment is properly set up'
            ]
          },
          {
            id: 2,
            title: 'Core Concepts',
            explanation: 'Now that we have our environment set up, let\'s dive into the core concepts.',
            codeBlock: {
              code: `# Understanding the basics
def example_function():
    return "Learning ${topic}"`,
              language: 'python'
            },
            userPrompt: 'Modify the function to return a custom message.',
          },
          {
            id: 3,
            title: 'Advanced Implementation',
            explanation: 'Let\'s put everything together and create something meaningful.',
            codeBlock: {
              code: `# Advanced implementation
class ${topic.replace(/\s+/g, '')}:
    def __init__(self):
        self.name = "Advanced Tutorial"`,
              language: 'python'
            },
            userPrompt: 'Extend this class with additional methods.',
          }
        ]
      };
      
      addTutorial(newTutorial);
      setGenerating(false);
      setTopic('');
    }, 2000);
  };

  return (
    <div className="bg-dark-100 rounded-xl shadow-lg p-6 mb-8 border border-dark-300">
      <h2 className="text-2xl font-bold text-gray-100 mb-4">Generate New Tutorial</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-1">
            What do you want to learn?
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Python Data Structures, C++ Pointers"
            className="w-full px-4 py-2 bg-dark-300 border border-dark-400 text-gray-100 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400 placeholder-gray-500"
            disabled={isGenerating}
          />
        </div>

        <div>
          <label htmlFor="level" className="block text-sm font-medium text-gray-300 mb-1">
            Choose your level
          </label>
          <select
            id="level"
            value={level}
            onChange={(e) => setLevel(e.target.value as 'beginner' | 'intermediate' | 'advanced')}
            className="w-full px-4 py-2 bg-dark-300 border border-dark-400 text-gray-100 rounded-lg focus:ring-2 focus:ring-accent-400 focus:border-accent-400"
            disabled={isGenerating}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={isGenerating || !topic.trim()}
          className="w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating Tutorial...
            </>
          ) : (
            <>
              <Wand2 className="w-5 h-5" />
              Generate Tutorial
            </>
          )}
        </button>
      </form>
    </div>
  );
}