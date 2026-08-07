// Compact exercise row with an inline ▶ button that triggers the video modal.
export default function ExerciseCard({ exercise, index, accentColor, onVideoOpen }) {
  const { name, sets, reps, duration, note, videoId, videoTitle } = exercise;

  const setsRepsLabel =
    duration
      ? `${sets ? `${sets} × ` : ''}${duration}`
      : sets && reps
      ? `${sets} × ${reps}`
      : reps || duration || '—';

  return (
    <div className="ex-row">
      <span className="ex-num" style={{ color: accentColor }}>
        {String(index).padStart(2, '0')}
      </span>

      <div className="ex-row-body">
        <span className="ex-row-name">{name}</span>
        {note && <span className="ex-row-note">{note}</span>}
      </div>

      <div className="ex-row-badge" style={{ borderColor: accentColor + '55', color: accentColor }}>
        {setsRepsLabel}
      </div>

      {videoId && (
        <button
          className="ex-row-play"
          style={{ '--play-color': accentColor }}
          onClick={() => onVideoOpen({ videoId, title: videoTitle || name })}
          aria-label={`Watch form guide for ${name}`}
          title="Watch form guide"
        >
          <PlayIcon />
        </button>
      )}
    </div>
  );
}

function PlayIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 2.5v11l9-5.5z" />
    </svg>
  );
}
