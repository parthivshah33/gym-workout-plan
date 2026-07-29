const TABS = [
  { id: 'push', label: 'Push', variant: 'push' },
  { id: 'pull', label: 'Pull', variant: 'pull' },
  { id: 'legs', label: 'Legs', variant: 'legs' },
  { id: 'upper', label: 'Upper', variant: 'upper' },
  { id: 'progress', label: 'Progress', variant: 'progress' },
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
