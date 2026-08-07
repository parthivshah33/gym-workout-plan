// New 4-tab structure: 3 workout days (repeating) + Progress
const TABS = [
  { id: 'back-biceps', label: 'Back & Bis', variant: 'pull' },
  { id: 'legs-core',   label: 'Legs & Core', variant: 'legs' },
  { id: 'push',        label: 'Push Day',    variant: 'push' },
  { id: 'progress',    label: 'Progress',    variant: 'progress' },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <nav className="tabbar" role="tablist" aria-label="Workout day navigation">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={activeTab === tab.id}
          className={`tab-btn tab-btn--${tab.variant}${
            activeTab === tab.id ? ' active' : ''
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          <span className="plate" />
          {tab.label}
        </button>
      ))}
    </nav>
  );
}
