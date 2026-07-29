import ExerciseCard from './ExerciseCard';

export default function DayPanel({ day }) {
  const accentVar = `var(--${day.color})`;
  const accentDimVar = `var(--${day.color}-dim)`;

  return (
    <section
      className="day-panel"
      style={{ '--acc': accentVar, '--acc-dim': accentDimVar }}
    >
      <div className="day-head">
        <div className="day-tag" style={{ color: accentVar }}>
          Day {day.dayNumber} · {day.label}
        </div>
        <div className="day-title">{day.title}</div>
        <div className="day-meta">
          <span>
            Target <b>{day.targetTime}</b>
          </span>
          <span>
            Warm-up <b>{day.warmup}</b>
          </span>
        </div>
      </div>

      {day.topNote && (
        <div className="day-note day-note--top">{day.topNote}</div>
      )}

      {day.blocks.map((block, blockIdx) => (
        <div
          key={blockIdx}
          className={`block${block.paired ? ' block--paired' : ''}`}
          style={block.paired ? { '--acc': accentVar } : undefined}
        >
          {block.label && <div className="block-label">{block.label}</div>}

          {block.exercises.map((exercise, exIdx) => (
            <ExerciseCard key={exIdx} exercise={exercise} />
          ))}
        </div>
      ))}

      {day.stretchNote && (
        <div className="day-note">{day.stretchNote}</div>
      )}
    </section>
  );
}
