import ExerciseCard from './ExerciseCard';

const COLOR_VAR = {
  push: 'var(--push)',
  pull: 'var(--pull)',
  legs: 'var(--legs)',
  upper: 'var(--upper)',
};

function buildGlobalIndex(sections) {
  let counter = 0;
  return sections.map((section) => ({
    ...section,
    exercises: section.exercises.map((ex) => ({ ...ex, globalIdx: ++counter })),
  }));
}

export default function DayPanel({ day, onVideoOpen }) {
  const accentVar = COLOR_VAR[day.color] || 'var(--steel)';
  const indexedSections = buildGlobalIndex(day.sections);

  return (
    <section
      className="day-panel"
      style={{ '--acc': accentVar, '--acc-dim': `var(--${day.color}-dim)` }}
    >
      <div className="day-head">
        <div className="day-tag" style={{ color: accentVar }}>
          Day {day.dayNumbers}
        </div>
        <div className="day-title">{day.title}</div>
        <div className="day-meta">
          <span>3 sets · 15 / 12 / 10 reps</span>
          <span style={{ marginLeft: 'auto' }}>
            Plan: <b>06 Mar → 01 Sep 2026</b>
          </span>
        </div>
      </div>

      {indexedSections.map((section) => {
        const sectionAccent = COLOR_VAR[section.color] || accentVar;
        return (
          <div key={section.group} className="muscle-section">
            <div className="muscle-section-header" style={{ '--sec-color': sectionAccent }}>
              <span className="muscle-section-line" />
              <span className="muscle-section-label">{section.group}</span>
              <span className="muscle-section-count">
                {section.exercises.length} exercise{section.exercises.length !== 1 ? 's' : ''}
              </span>
            </div>

            <div className="muscle-section-body">
              {section.exercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  index={exercise.globalIdx}
                  accentColor={sectionAccent}
                  onVideoOpen={onVideoOpen}
                />
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
