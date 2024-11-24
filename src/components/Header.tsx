import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-dark-100 shadow-lg border-b border-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <BookOpen className="w-8 h-8 text-accent-400" />
            <h1 className="text-2xl font-bold text-gray-100">AI Tutorial Generator</h1>
          </Link>
          
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Sparkles className="w-4 h-4 text-accent-400" />
            Powered by AI
          </div>
        </div>
      </div>
    </header>
  );
}