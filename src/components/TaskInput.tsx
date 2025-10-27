import { useState } from 'react';
import { Plus } from 'lucide-react';

interface TaskInputProps {
  onAdd: (title: string) => void;
}

export function TaskInput({ onAdd }: TaskInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 
                   dark:border-gray-600 dark:bg-gray-800 dark:text-white
                   focus:outline-none focus:border-blue-500 
                   transition-colors duration-200"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white 
                   rounded-lg flex items-center gap-2 font-medium
                   transition-colors duration-200"
      >
        <Plus size={20} />
        Add
      </button>
    </form>
  );
}