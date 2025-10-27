import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="fixed top-6 right-6 p-3 rounded-full 
                 bg-gray-200 dark:bg-gray-700
                 text-gray-800 dark:text-yellow-300
                 hover:bg-gray-300 dark:hover:bg-gray-600
                 transition-colors duration-200 shadow-lg"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}