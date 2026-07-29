const PlayIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2.5v11l9-5.5z" />
  </svg>
);

export default function ExerciseCard({ exercise }) {
  const {
    name,
    tag,
    muscle,
    sets,
    rest,
    stat3,
    cue,
    weight,
    videoQuery,
    setsLabel,
    restLabel,
  } = exercise;

  return (
    <div className="ex-card">
      <div className="ex-top">
        <div className="ex-name">
          {name}
          {tag && <span className="ex-tag"> — {tag}</span>}
        </div>
        <div className="muscle-pill">{muscle}</div>
      </div>

      <div className="ex-grid">
        <div className="stat">
          <b>{sets}</b>
          <span>{setsLabel || 'Sets × Reps'}</span>
        </div>
        <div className="stat">
          <b>{rest}</b>
          <span>{restLabel || 'Rest'}</span>
        </div>
        <div className="stat">
          <b>{stat3.value}</b>
          <span>{stat3.label}</span>
        </div>
      </div>

      {cue && <div className="ex-cue">{cue}</div>}

      <div className="ex-foot">
        <div className="weight-tag">
          {weight.startsWith('Start: ')
            ? <>Start: <em>{weight.slice(7)}</em></>
            : weight}
        </div>
        {videoQuery && (
          <a
            className="video-link"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://www.youtube.com/results?search_query=${videoQuery}`}
          >
            <PlayIcon />
            Form guide
          </a>
        )}
      </div>
    </div>
  );
}
