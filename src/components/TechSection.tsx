import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import type { Technology } from '../types';
import TechCard from './TechCard';
import YourStack from './YourStack';

export default function TechSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [stack, setStack] = useState<Technology[]>([]);

  // Fetch data from public/data.json
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/data.json');
        if (!res.ok) throw new Error('Failed to load data');
        const data: Technology[] = await res.json();
        setTechnologies(data);
      } catch (err) {
        toast.error('Failed to load technologies.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleAdd = (tech: Technology) => {
    if (stack.find((t) => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, { icon: '⚠️' });
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack!`, { icon: '✅' });
  };

  const handleRemove = (id: string) => {
    const tech = stack.find((t) => t.id === id);
    setStack((prev) => prev.filter((t) => t.id !== id));
    if (tech) toast.info(`${tech.name} removed from your stack.`, { icon: '🗑️' });
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.error('All technologies removed from your stack.', { icon: '🧹' });
  };

  const isAdded = (id: string) => !!stack.find((t) => t.id === id);

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Explore the{' '}
          <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-gray-500 mt-2 text-base">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {/* Loading spinner */}
      {loading && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="h-12 w-12 rounded-full border-4 border-pink-200 border-t-pink-500 animate-spin" />
          <p className="text-gray-400 text-sm">Loading technologies…</p>
        </div>
      )}

      {/* Content: grid + sidebar */}
      {!loading && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tech grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {technologies.map((tech) => (
                <TechCard
                  key={tech.id}
                  tech={tech}
                  isAdded={isAdded(tech.id)}
                  onAdd={handleAdd}
                />
              ))}
            </div>
          </div>

          {/* Your Stack sidebar */}
          <div className="w-full lg:w-72 xl:w-80 shrink-0">
            <YourStack
              stack={stack}
              onRemove={handleRemove}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      )}
    </section>
  );
}
