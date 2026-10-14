import type { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

// Badge color mapping
const BADGE_COLORS: Record<string, string> = {
  Popular: 'bg-blue-50 text-blue-600',
  Versatile: 'bg-green-50 text-green-600',
  Fast: 'bg-orange-50 text-orange-500',
  Standard: 'bg-purple-50 text-purple-600',
  Essential: 'bg-yellow-50 text-yellow-600',
  'Top SQL': 'bg-teal-50 text-teal-600',
  Cache: 'bg-red-50 text-red-500',
  Ubiquitous: 'bg-indigo-50 text-indigo-600',
  Robust: 'bg-pink-50 text-pink-600',
  Modern: 'bg-cyan-50 text-cyan-600',
  Containers: 'bg-sky-50 text-sky-600',
};

// Category chip colors
const CATEGORY_COLORS: Record<string, string> = {
  Frontend: 'bg-blue-50 text-blue-600',
  Backend: 'bg-green-50 text-green-600',
  Database: 'bg-purple-50 text-purple-600',
  Language: 'bg-yellow-50 text-yellow-700',
  Styling: 'bg-cyan-50 text-cyan-600',
  DevOps: 'bg-orange-50 text-orange-600',
  Tools: 'bg-gray-100 text-gray-700',
};

export default function TechCard({ tech, isAdded, onAdd }: TechCardProps) {
  const badgeClass = BADGE_COLORS[tech.badge] ?? 'bg-gray-100 text-gray-600';
  const catClass = CATEGORY_COLORS[tech.category] ?? 'bg-gray-100 text-gray-600';

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Top row: icon + badge */}
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={tech.name}
          className="h-10 w-10 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              'https://placehold.co/40x40/f3f4f6/9ca3af?text=' +
              tech.name.charAt(0);
          }}
        />
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeClass}`}>
          {tech.badge}
        </span>
      </div>

      {/* Name "this is tech name" */}
      <h3 className="text-base font-bold text-gray-900">{tech.name}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
        {tech.description}
      </p>

      {/* Category chip + Difficulty + Rating */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className={`px-2.5 py-1 rounded-full font-medium ${catClass}`}>
          {tech.category}
        </span>
        <span className="text-gray-400">{tech.difficulty}</span>
        <span className="ml-auto flex items-center gap-1 text-gray-700 font-semibold">
          <span className="text-yellow-400">★</span>
          {tech.rating}
        </span>
      </div>

      {/* Add to Stack button */}
      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-1 w-full py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
          isAdded
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-gray-900 text-white hover:bg-gray-700 active:scale-95'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}
