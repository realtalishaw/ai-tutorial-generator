import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TutorialCard from './components/TutorialCard';
import TutorialGenerator from './components/TutorialGenerator';
import TutorialDetail from './components/TutorialDetail';
import { useTutorialStore } from './store/tutorialStore';

export default function App() {
  const { tutorials } = useTutorialStore();

  return (
    <Router>
      <div className="min-h-screen bg-dark-200">
        <Header />
        
        <Routes>
          <Route path="/" element={
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <TutorialGenerator />
              
              {tutorials.length > 0 && (
                <>
                  <h2 className="text-3xl font-bold text-gray-100 mb-6">Generated Tutorials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tutorials.map((tutorial) => (
                      <TutorialCard
                        key={tutorial.id}
                        tutorial={tutorial}
                      />
                    ))}
                  </div>
                </>
              )}
            </main>
          } />
          <Route path="/tutorial/:id" element={<TutorialDetail />} />
        </Routes>
      </div>
    </Router>
  );
}