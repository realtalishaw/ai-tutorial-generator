import React from 'react';
import { Copy } from 'lucide-react';

type CodeBlockProps = {
  code: string;
  language: string;
};

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="relative group">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={copyToClipboard}
          className="p-2 bg-dark-300 rounded-lg hover:bg-dark-400 transition-colors"
          title="Copy code"
        >
          <Copy className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <pre className="bg-dark-300 p-4 rounded-lg overflow-x-auto">
        <code className="text-gray-300 text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}