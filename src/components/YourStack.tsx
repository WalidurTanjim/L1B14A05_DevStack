import type { Technology } from '../types';

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  return (
    <aside className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 flex flex-col gap-4 h-fit sticky top-20">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
        {stack.length > 0 ? (
          <p className="text-sm gradient-text font-semibold mt-0.5">
            {stack.length} {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        ) : (
          <p className="text-sm text-gray-400 mt-0.5">No technologies selected yet.</p>
        )}
      </div>

      {/* Empty state */}
      {stack.length === 0 && (
        <div className="border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center py-8 px-4">
          <p className="text-sm text-gray-400 text-center">Your stack is empty.</p>
        </div>
      )}

      {/* Stack items */}
      {stack.length > 0 && (
        <ul className="flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 border border-gray-100 rounded-xl px-3 py-2.5 bg-gray-50 hover:bg-white transition-colors duration-150"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="h-8 w-8 object-contain shrink-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'https://placehold.co/32x32/f3f4f6/9ca3af?text=' +
                    tech.name.charAt(0);
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{tech.name}</p>
                <p className="text-xs text-gray-400 truncate">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="text-gray-400 hover:text-red-500 transition-colors text-base font-bold shrink-0"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* Remove All button */}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full border-2 border-red-400 text-red-500 font-semibold py-2.5 rounded-xl hover:bg-red-50 transition-colors duration-200 text-sm"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
