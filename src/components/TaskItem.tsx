import { Check, Trash2 } from 'lucide-react';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div
      className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 
                 rounded-lg border-2 border-gray-200 dark:border-gray-700
                 hover:border-blue-300 dark:hover:border-blue-600
                 transition-colors duration-200 group"
    >
      <button
        onClick={() => onToggle(task.id)}
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                    transition-all duration-200 ${
          task.completed
            ? 'bg-green-500 border-green-500'
            : 'border-gray-300 dark:border-gray-600 hover:border-green-500'
        }`}
      >
        {task.completed && <Check size={16} className="text-white" />}
      </button>

      <span
        className={`flex-1 text-gray-800 dark:text-gray-200 transition-all duration-200 ${
          task.completed
            ? 'line-through text-gray-400 dark:text-gray-500'
            : ''
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="opacity-0 group-hover:opacity-100 text-red-500 
                   hover:text-red-600 transition-all duration-200"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}