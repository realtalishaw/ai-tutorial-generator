import React from 'react';
import { BookOpen, Code2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tutorial } from '../store/tutorialStore';

type TutorialCardProps = {
  tutorial: Tutorial;
};

const levelColors = {
  beginner: 'bg-emerald-900/50 text-emerald-300',
  intermediate: 'bg-blue-900/50 text-blue-300',
  advanced: 'bg-purple-900/50 text-purple-300',
};

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  return (
    <div className="bg-dark-100 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-dark-300">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[tutorial.level]}`}>
            {tutorial.level.charAt(0).toUpperCase() + tutorial.level.slice(1)}
          </span>
          <span className="text-gray-400 text-sm flex items-center gap-1">
            <Code2 className="w-4 h-4" />
            {tutorial.language}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-100 mb-2">{tutorial.title}</h3>
        <p className="text-gray-400 mb-4">{tutorial.description}</p>
        
        <div className="flex items-center justify-between pt-4 border-t border-dark-300">
          <div className="flex items-center text-gray-400">
            <BookOpen className="w-4 h-4 mr-2" />
            <span className="text-sm">{tutorial.duration}</span>
          </div>
          <Link 
            to={`/tutorial/${tutorial.id}`}
            className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors duration-200 flex items-center gap-2"
          >
            Start Learning
            <Star className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}