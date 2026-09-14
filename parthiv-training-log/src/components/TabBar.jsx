const TAB_GROUPS = [
  {
    label: 'Training',
    tabs: [
      { id: 'back-biceps', label: 'Back & Bis', variant: 'pull' },
      { id: 'legs-core', label: 'Legs & Core', variant: 'legs' },
      { id: 'push', label: 'Push Day', variant: 'push' },
    ],
  },
  {
    label: 'Body',
    tabs: [
      { id: 'progress', label: 'BMI', variant: 'progress' },
      { id: 'labs', label: 'Labs', variant: 'labs' },
    ],
  },
];

export default function TabBar({ activeTab, onTabChange }) {
  return (
    <nav className="tabbar" aria-label="Personal analysis navigation">
      {TAB_GROUPS.map((group) => (
        <div key={group.label} className="tab-group" role="tablist" aria-label={group.label}>
          {group.tabs.map((tab) => (
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
        </div>
      ))}
    </nav>
  );
}
